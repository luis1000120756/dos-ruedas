import { Routes } from '@angular/router';
import { authRoute } from './auth/auth.route';
export const routes: Routes = [
    {
        path: '',
        children: authRoute, //si el usuario tiene token entonces entre dasboard o admin 
    }
];
