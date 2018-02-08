import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ){}

  getUser(): Observable<User> {
    // add authroization header with jwt token
    let headers = new Headers({ 'authroization':'Bearer' + this.authentication.token});
    let options = new RequestOptions({headers: headers});

    //get users from Api
    return this.http.get('http://localhost:8080/api/user/showusers')
      .map((response: Response) => {
        console.log(response)
        return response[0]
      });
  }
}
