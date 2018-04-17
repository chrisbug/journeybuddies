import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading = false;
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    this.authenticationService.signup(email, password, firstName, lastName)
      .subscribe(returnedid => {
        this.authenticationService.login(email, password)
          .subscribe(response => {
            console.log(response);
            this.authenticationService.setToken(response);
            this.userService.getUserByEmail(email)
              .subscribe(result => {
                console.log(result);
                this.userService.setCurrentUser(result);
                this.router.navigate(['profile']);
              });
          });
      });
  }

}
