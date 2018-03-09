
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  token = '';
  _id: string;
  public url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
    this.token = '';
  }

  getToken() {
    if (this.token) {
      return this.token;
    } else if (localStorage.getItem('token')) {
        localStorage.getItem('token');
    } else {
      return;
    }
  }

  getUrl() {
    return this.url;
  }

  login(email: string, password: string) {
    console.log(email + ' ' + password);
    return this.http.post('http://127.0.0.1:8080/api/user/authenticate', {email: email, password: password});
    // .map((response: HttpResponse<any>) => {
    //   console.log(response)
    //   let token = response.token;
    //   let id = response.user._id;
    //   let username = response.user.firstName + ' ' + response.user.lastName;
    //   if(token){
    //     this.token = token;
    //     //store email and jwt token in local storage to keep
    //     localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
    //     localStorage.setItem('userId', id);
    //     localStorage.setItem('userFristName', username);

    //     //return true to indicate succeslful login
    //     return true;
    //   } else {
    //     //return false to indicate failed login
    //     return false;
    //   }
    // });
  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post('http://127.0.0.1:8080/api/user/signup',
      {email: email, password: password, firstName: firstName, lastName: lastName});
      // .map((response: HttpResponse<any>) => {
      //   console.log(response)
      //   if(response.success){
      //     localStorage.setItem('currentUser', JSON.stringify({email: email, token: response.token}));
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });
  }

  isAuthenticated() {
    if (this.token !== null) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  setId(_id: string) {
    this._id = _id;
    localStorage.setItem('_id', _id);
  }

  logout(): void {
    // clear all user info from sesion
    this.token = null;
    localStorage.clear();
  }

}
