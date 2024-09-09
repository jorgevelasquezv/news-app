import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { UserService } from '../app/services/user.service';
import { Role } from '../app/domain/enums/role.enum';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const userServices: UserService = inject(UserService);
  const user = userServices.user();

  if (user?.role === Role.Admin) {
    return true;
  }

  return false;
};
