import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implemnets CanActivate {

  constructor(private router: Router){}

  canActivate(){
    if(localStorage.getItem('currentUser'){
      //user exists so logged in
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }
}
