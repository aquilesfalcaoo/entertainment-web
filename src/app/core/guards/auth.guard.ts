import { inject } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

export const AuthGuard = () => {
  const user = inject(UserService);
  const router = inject(Router);

  if (user.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
