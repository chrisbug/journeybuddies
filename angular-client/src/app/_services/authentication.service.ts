import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from '@rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http:Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password): Observable<boolean> {
    return this.http.post('user/authenticate', JSON.stringify({username: username, password: password}))
    .map((response: Response) => {
      let token = response.json() && response.json().token;
      if(token){
        this.token = token;

        //store username and jwt token in local storage to keep
        localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

        //return true to indicate succeslful login
        return true;
      } else {
        //return false to indicate failed login
        return false;
      }
    });
  }

  logout(): void {
    //clear all user info from sesion
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
