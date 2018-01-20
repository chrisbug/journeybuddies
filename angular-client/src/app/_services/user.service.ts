import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService } from './_services/user.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authentication: AuthenticationService
  ){}

  getUsers(): Observable<User[]> {
    // add authroization header with jwt token
    let headers = new Headers({ 'authroization':'Bearer' + this.authentication.token});
    let options = new RequestOptions({headers: headers});

    //get users from Api
    return this.http.get('url endpoing', options)
      .map((response: Response) => response.json());
  }
}
