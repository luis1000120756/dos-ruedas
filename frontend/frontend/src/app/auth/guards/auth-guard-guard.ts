import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  // console.log('Guard ejecutado. ¿Está logueado?', authService.isLoggedIn());
  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
