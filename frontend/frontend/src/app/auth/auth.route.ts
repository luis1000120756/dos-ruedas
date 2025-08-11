import { Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "../user/pages/register-page/register-page.component";

export const authRoute: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
]