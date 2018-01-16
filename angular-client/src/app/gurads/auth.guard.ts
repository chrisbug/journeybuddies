import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if( localStorage.getItem('currentUser')){
        return true;
      }

      //not logged in so redirect to login page with the return Url
      this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
      return false;
  }
}
