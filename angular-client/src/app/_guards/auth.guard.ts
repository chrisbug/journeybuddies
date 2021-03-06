import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.getCurrentUserId()) {
      // user exists so logged in
      return true;
    }
    return false;
  }
}
