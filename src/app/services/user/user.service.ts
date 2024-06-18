import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_URL } from 'src/app/shared/urls';
import { User } from 'src/app/models/user';
import { jwtDecode } from "jwt-decode";
import { RegisterResponse } from 'src/app/models/authRegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getHttpHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${USER_URL}/signup`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${USER_URL}/login`, user, { headers: this.getHttpHeader() });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${USER_URL}/${id}`);
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      console.log("no token")
    }
    return this.http.post(`${USER_URL}/token`, { token: refreshToken });
  }

  saveTokens(accessToken: string, refreshToken: string) {
    if (accessToken && refreshToken) {
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } else {
      console.error('Cannot save undefined tokens', { accessToken, refreshToken });
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserIdFromToken(token: string): string | null {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken?.id;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  storeUserId(token: string): void {
    const userId = this.getUserIdFromToken(token);
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      console.error('User ID not found in token');
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(`${USER_URL}/${id}`);
  }
}
