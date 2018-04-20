import { catchError } from 'rxjs/operators';
import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loading = true;
    this.authenticationService.login(email, password)
      .subscribe(response => {
        console.log(response);
        this.authenticationService.setToken(response);
        this.userService.getUserByEmail(email)
          .subscribe(result => {
            console.log(result);
              console.log('error');
            this.userService.setCurrentUser(result);
            this.router.navigate(['profile']);
          });
      });
  }

}
