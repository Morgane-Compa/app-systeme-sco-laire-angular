import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school/school.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  schools: School[] = [];

  constructor(private fb: FormBuilder, private userService: UserService, private schoolService: SchoolService, private router: Router) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      password: ['', Validators.required],
      user_role: ['', Validators.required],
      school_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools() {
    this.schoolService.getAllSchools().subscribe(data => {
      this.schools = data;
    }, error => {
      console.error('Failed to load schools', error);
    });
  }

  register() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      formData.user_image_id = 1;
      
      this.userService.register(formData).subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
