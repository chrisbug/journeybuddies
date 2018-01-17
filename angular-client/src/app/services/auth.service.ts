import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    const url =  '127.0.0.1:8080/authenticate';
    this.http.post(url, {email: email, password: password}).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log('Error sorry');
      }
    )
  }

  isAuthenticated(){
    return true;
  }

}
