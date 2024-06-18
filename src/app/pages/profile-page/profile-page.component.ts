import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from 'src/app/models/classroom';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';
import { SchoolService } from 'src/app/services/school/school.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  user?: User;
  userId: number | null = null;
  school? : School;
  classroom? : Classroom;

  constructor(private userService: UserService, private schoolService: SchoolService, private classroomService: ClassroomService, private router: Router) { }

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      this.userId = Number(storedUserId);
    }
    if (this.userId !== null && !isNaN(this.userId)) {
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          this.user = data.data;
          if (this.user && this.user.school_id) {
            this.loadSchool(this.user.school_id);
          }
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  }

  loadSchool(schoolId: number): void {
    this.schoolService.getSchoolById(schoolId).subscribe(
      (data) => {
        this.school = data;
      },
      (error) => {
        console.error('Error fetching school data', error);
      }
    );
  }

  // loadClassroom(classroomId: number): void {
  //   this.classroomService.getSchoolById(classroomId).subscribe(
  //     (data) => {
  //       this.classroom = data;
  //       console.log(this.classroom)
  //     },
  //     (error) => {
  //       console.error('Error fetching school data', error);
  //     }
  //   );
  // }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  DeleteAcount() {
    if(this.userId) {
      this.userService.deleteUserById(this.userId).subscribe(
        () => {
          console.log('User deleted successfully');
          this.userService.logout(); 
          this.router.navigate(['/register']); 
        },
        (error) => {
          console.error('Error deleting user', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  }
}