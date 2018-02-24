import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import { Group } from '../_models/group.model';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class UserService {
  public url: string;
  public group: string;
  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ){
    this.url = authentication.getUrl();
  }

  getUser(id:string): Observable<User> {
    console.log(this.authentication.token)
    // add authroization header with jwt token
    let headers = new HttpHeaders({ 'x-access-token': this.authentication.token, '_id': id});
    //get users from Api
    return this.http.get(this.url+'getuser', {headers})
      .map((response: Response) => {
        console.log(response)
        let LoggedInUser:User = response.user;
        return LoggedInUser;
      });
  }

  getGroups(id:string): Observable<Group>{
    let headers = new HttpHeaders({ 'x-access-token': this.authentication.token, '_id': id});
    return this.http.get(this.url+'getusergroups', {headers})
      .map((response: Response) => {
        console.log(response)
        let userGroups:Group = response.group;
        return userGroups;
      });
  }

  setGroup(group: string){
    this.group = group;
  }

  createGroup(id:string, email: string): Observable<boolean>{
    console.log(this.authentication.token)
    console.log("running service");
    return this.http.post(this.url+'creategroup', {_id: id, email: email, token: this.authentication.token})
    .map((response: HttpResponse<any>) => {
      console.log('IT REUTNED')
      return true;
    })
  }
}
