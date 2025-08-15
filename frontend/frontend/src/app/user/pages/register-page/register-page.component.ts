import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../services/register.service';
import { RegisterRequest } from '../../interfaces/register-request';
import { RegisterResponse } from '../../interfaces/register-response';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../auth/services/auth.service';
import { VerifyCode } from '../../interfaces/verifyCode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: 'register-page.component.html',
  styleUrl: './register-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  pageCodeVerification: boolean = false;
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);
  private registerService = inject(RegisterService);
  private router = inject(Router);
  subscribe: any;
  isLoading: boolean = false;
  code_verification: string | undefined;
  messageError: string | undefined;
  errorMessageCodeVerification: string | undefined;
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
  });
  inputCode = this.fb.group({
    code_verification: ['', Validators.required],
  });

  onSubmit() {
    this.isLoading = true;
    const valuesForm: RegisterRequest = {
      name: this.registerForm.value.name ?? '',
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? '',
    };

    this.registerService.register(valuesForm).subscribe({
      next: (response: RegisterResponse) => {
        this.isLoading = false;
        this.pageCodeVerification = true;
        this.code_verification = response.code_verification;
        this.cdr.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error al registrar usuario', error);
        this.isLoading = false;
        this.messageError =
          'Existe un usuario registrado con ese correo electronico. Intente de nuevo con otro correo';
        this.cdr.detectChanges();
      },
    });
  }

  onSubmitCodeVerification(codeInput: string) {
    if (codeInput === this.code_verification) {
      this.registerService.codeVerify(codeInput).subscribe({
        next: (response: VerifyCode): void => {
          this.authService.saveToken(response.access_token);
          setTimeout(() => {
            this.router.navigate(['/dashboardCli/home']);
          }, 1000);
          this.errorMessageCodeVerification = undefined;
        },
        error: (error: HttpErrorResponse): void => {
          console.error('Error en verificación de código', error);
          this.errorMessageCodeVerification =
            'Error en la verificación del código, Intente de nuevo ';
        },
      });
    } else {
      this.errorMessageCodeVerification =
        'Error en la verificación del código, Intente de nuevo ';
    }
  }
}
