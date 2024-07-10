import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isAuthenticated = authService.isAuthenticated();
  
  return isAuthenticated;
};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  const isRoleAdmin = authService.isRoleAdmin();
  
  return isRoleAdmin;
};