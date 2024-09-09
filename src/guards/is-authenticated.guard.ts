import { Router, type CanActivateFn } from '@angular/router';
import { AuthStatus } from '../app/domain/enums/auth-status.enum';
import { AuthService } from '../app/auth/services/auth.service';
import { inject } from '@angular/core';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
   const router = inject(Router);

   if (authService.authStatus() === AuthStatus.authenticated) {
     return true;
   }

   if (authService.authStatus() === AuthStatus.checking) {
     return false;
   }

   const url = state.url;
   localStorage.setItem('url', url);
   router.navigateByUrl('/');

   return false;
};
