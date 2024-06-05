import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${USER_URL}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${USER_URL}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
