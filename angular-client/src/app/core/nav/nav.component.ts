import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  toggleMenu = false;
  constructor(public authservice: AuthenticationService) { }

  ngOnInit() {
    this.toggleMenu = false;
  }

  onToggleMenu() {
    if (this.toggleMenu) {
      this.toggleMenu = false;
    } else { this.toggleMenu = true; }
  }

}
