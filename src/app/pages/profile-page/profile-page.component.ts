import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  user?: User;
  userId: number | null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = Number(storedUserId);
    }
    if (this.userId !== null && !isNaN(this.userId)) {
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          this.user = data.data;
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    } else {
      console.error('User ID is null or not a number');
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}