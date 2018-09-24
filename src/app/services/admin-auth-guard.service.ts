import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    //navigates only when user is admin
    let user = this.authService.currentUser;
    if (user && user.admin) {
      return true;
    }
    else {
      this.router.navigate(['/no-access']);
    }
    return false;
  }
}
