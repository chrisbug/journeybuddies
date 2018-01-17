import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PortService} from '../../../services/port.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private portService:PortService,
              private auth:AuthService) {}

  myport:string;

  ngOnInit() {
    this.myport = this.portService.getPort();
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log('Write server to send',email, password);
    this.auth.login(email, password);
  }

}
