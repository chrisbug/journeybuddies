
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  token = '';
  _id: string;
   public url = 'https://52.50.230.227/api/'; // live url
  // public url = 'http://127.0.0.1:8000/api/'; // Testing url

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
    return this.http.post(`${this.url}user/authenticate`, {email: email, password: password});
  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post(`${this.url}user/signup`,
      {email: email, password: password, firstName: firstName, lastName: lastName});
  }

  isAuthenticated() {
    if (this.token !== null && this.token.length > 2) {
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
