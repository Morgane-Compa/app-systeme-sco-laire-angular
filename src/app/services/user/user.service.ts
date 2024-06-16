import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { USER_URL } from 'src/app/shared/urls';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getHttpHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  
  register(user: User): Observable<any> {
    return this.http.post(`${USER_URL}/signup`, user, { headers: this.getHttpHeader() });
  }

  login(user: User): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${USER_URL}/login`, user, { headers });
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return throwError('No refresh token available');
    }

    return this.http.post(`${USER_URL}/token`, { token: refreshToken });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
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

  handleError(error: any): Observable<any> {
    if (error.status === 401 && error.error.message === 'Token expired') {
      return this.refreshToken().pipe(
        switchMap((tokens: any) => {
          const { accessToken } = tokens;
          const refreshToken = localStorage.getItem('refreshToken');
          if (!refreshToken) {
            return throwError('No refresh token available');
          }
          this.saveTokens(accessToken, refreshToken);
          return throwError('Token refreshed, please retry your request');
        })
      );
    }
    return throwError(error);
  }
}
