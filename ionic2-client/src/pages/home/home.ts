import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signinToken: Observable<any>;
  token: string;
  userSignedIn: Observable<any>;
  user: any;
  
  constructor(public navCtrl: NavController, public http: HttpClient) {
    // this.films = this.http.post('http://52.50.230.227:80/api/user/authenticate', {email: 'chris@test.com', password:'password'});
    // this.films.subscribe(data => {
    //   this.token = JSON.stringify(data);
    //   console.log(this.token);
    // })

  }
  onSignIn(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.signinToken = this.http.post('http://52.50.230.227:80/api/user/authenticate', { email: email, password: password });
    this.signinToken.subscribe(data => {
      this.token = data;
      console.log(this.token);
      const headers = new HttpHeaders({
        'token': this.token,
        'email': email
      });
      this.userSignedIn = this.http.get('http://52.50.230.227:80/api/getuser', {headers: headers});
      this.userSignedIn.subscribe( data => {
        this.user = data;
        let passing = [this.user, this.token]
        this.navCtrl.push(ProfilePage, passing);
      });

    });
  }
}
