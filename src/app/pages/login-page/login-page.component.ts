import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(response => {
        console.log('Response from login:', response);
        const { accessToken, refreshToken } = response.token;
        if (accessToken && refreshToken) {
          this.userService.saveTokens(accessToken, refreshToken);
          this.router.navigate(['/news-feed']);
        } else {
          console.error('Tokens are not defined in the response', response);
        }
      }, error => {
        console.error('Login failed', error);
      });
    }
  }

}
