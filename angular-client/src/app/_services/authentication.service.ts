import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http:HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    console.log(this.token);
  }

  login(email: string, password:string): Observable<boolean> {
    console.log(email + ' ' + password)
    return this.http.post('http://127.0.0.1:8080/user/authenticate', {email: email, password: password})
    .map((response: HttpResponse) => {
      console.log(response)
      let token = response && response.token;
      if(token){
        this.token = token;

        //store email and jwt token in local storage to keep
        localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));

        //return true to indicate succeslful login
        return true;
      } else {
        //return false to indicate failed login
        return false;
      }
    });
  }

  signup(email: string, password:string, firstName: string, lastName: string): Observable<boolean>{
    return this.http.post('http://127.0.0.1:8080/user/signup', {email: email, password: password, firstName: firstName, lastName: lastName})
      .map((response: HttpResponse) => {
        console.log(response)
        if(response.success){
          localStorage.setItem('currentUser', JSON.stringify({email: email, token: response.token}));
          return true;
        } else {
          return false;
        }
      }
  }

  logout():void {
    //clear all user info from sesion
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
