import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment/environment';
import { LoginRequest } from '../interfaces/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  constructor() {}

  login(credentials: LoginRequest){
    return this.http.post<LoginResponse>(`${baseUrl}/auth/login`,credentials);
  }
}
