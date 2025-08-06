import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment/environment';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, timeout } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  login(credentials: LoginRequest) {
    return this.http.post<LoginResponse>(`${baseUrl}/auth/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  logout() {
    localStorage.removeItem('access_token');
    setTimeout(() => {
      this.router.navigate(['login']);
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }
}
