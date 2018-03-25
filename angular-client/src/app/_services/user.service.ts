import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import { Group } from '../_models/group.model';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class UserService {
  public url: string;
  public group: string;
  public currentUser: User;
  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {
    this.url = authentication.getUrl();
  }

  getUser(id: string) {
    // add authroization header with jwt token
    // get users from Api
    return this.http.post<User>(this.url + 'getuser', { token: this.authentication.getToken(), _id: id});
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('_id', user._id);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserId() {
    if (this.getCurrentUserId) {
      return this.currentUser._id;
    } else if (localStorage.getItem('_id')) {
      return localStorage.getItem('_id');
    } else {
      return;
    }
  }

  getUserByEmail(email: string) {
    return this.http.post(this.url + 'getuser', { token: this.authentication.getToken(), email: email });
  }

  getGroups(id: string) {
    console.log(this.authentication.token);
    return this.http.post(this.url + 'getusergroups', { token: this.authentication.getToken(), _id: id});
      // .map((response: Response) => {
      //   console.log(response);
      //   const userGroups: Group = response.group;
      //   return userGroups;
      // });
  }

  setGroup(group: string) {
    this.group = group;
  }

  getGroup() {
    return this.group;
  }

  logOut() {
    this.group = '';
    this.currentUser = null;
  }

  createGroup(id: string, email: string) {
    console.log(this.authentication.token);
    console.log('running service');
    console.log(id + ' ' + email);
    return this.http.post(this.url + 'creategroup', {_id: id, email: email, token: this.authentication.token});
    // .map((response) => {
    //   console.log('IT REUTNED')
    //   return true;
    // });
  }
}
