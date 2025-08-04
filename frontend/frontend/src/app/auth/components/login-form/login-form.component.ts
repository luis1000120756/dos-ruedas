import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/login-request';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  constructor(private authService: AuthService) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit(): any {
    if (this.loginForm.valid) {
      const credentialValues: LoginRequest = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      };
      this.authService.login(credentialValues).subscribe({
        next: (response) => {
          localStorage.setItem('access_token', response.access_token); //guardar en el navegador el token
          console.log('successfull login', response);
        },
        error: (error) => {
          if (error.status === 401) {
            console.error('error authentication', error);
          }
        },
      });
      // console.log('Datos del login:', credentialValues);
    } else {
      console.log('hay un error');
    }
  }
}
