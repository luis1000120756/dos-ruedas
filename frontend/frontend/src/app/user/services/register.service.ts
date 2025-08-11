import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse } from '../interfaces/register-response';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  register(valuesFormRegister: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${baseUrl}/auth/register`, valuesFormRegister);
  }
}
