import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent, HttpClientModule],
  templateUrl:'./login.page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
