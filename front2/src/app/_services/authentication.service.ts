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
    console.log(currentUser);
  }

  login(email: string, password:string): Observable<boolean> {
    console.log(email + ' ' + password)
    return this.http.post('http://127.0.0.1:8080/api/user/authenticate', {email: email, password: password})
    .map((response: HttpResponse<any>) => {
      console.log(response)
      let token = response.token;
      let id = response.user._id;
      if(token){
        this.token = token;
        //store email and jwt token in local storage to keep
        localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
        localStorage.setItem('userId', id);

        //return true to indicate succeslful login
        return true;
      } else {
        //return false to indicate failed login
        return false;
      }
    });
  }

  signup(email: string, password:string, firstName: string, lastName: string): Observable<boolean>{
    return this.http.post('http://127.0.0.1:8080/api/user/signup', {email: email, password: password, firstName: firstName, lastName: lastName})
      .map((response: HttpResponse<any>) => {
        console.log(response)
        if(response.success){
          localStorage.setItem('currentUser', JSON.stringify({email: email, token: response.token}));
          return true;
        } else {
          return false;
        }
      });
  }

  isAuthenticated(){
    if(this.token != null){
      return true;
    } else{
      return false;
    }
  }

  logout():void {
    //clear all user info from sesion
    this.token = null;
    localStorage.clear();
  }

}
