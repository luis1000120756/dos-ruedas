import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/login-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  errorMessage: string | null = null;
  isLoading: boolean = false;
  messageInputRequired: string | null = null;
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit(): any {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const credentialValues: LoginRequest = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      };
      this.authService.login(credentialValues).subscribe({
        next: (response) => {
          this.authService.saveToken(response.access_token); //guardar tokens
          setTimeout(() => {
            //espera un momento mientras se guardad el token
            this.router.navigate(['/dashboardCli/home']);
          });
          // console.log('successfull login', response);
        },

        error: (error) => {
          this.isLoading = false;
          if (error.status === 401) {
            this.errorMessage = 'Credenciales Incorrectas. Intente de nuevo';
            this.cdr.detectChanges();
            console.error('error authentication', error);
          }
        },
      });
    } else {
      console.log('hay un error');
    }
  }
}
