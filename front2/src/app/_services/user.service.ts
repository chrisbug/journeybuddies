import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ){}

  getUser(id:string): Observable<User> {
    // add authroization header with jwt token
    let headers = new HttpHeaders({ 'authroization':'Bearer' + this.authentication.token, 'id': id});
    //get users from Api
    return this.http.get('http://localhost:8080/api/user/getuser', {headers})
      .map((response: Response) => {
        console.log(response)
        let LoggedInUser:User = response.user;
        return LoggedInUser;
      });
  }
}
