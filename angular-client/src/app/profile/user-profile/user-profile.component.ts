import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';
import {Group} from '../../_models/group.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    admin: false,
    groups: []
  };
  id: string;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.userService.getUser(this.id).subscribe(
            (response => this.user = response));
      });
  }

  onAddGroup() {
    this.userService.createGroup(this.user._id, this.user.email)
      .subscribe(response => {
        console.log(response);
        const newGroupId: any = response;
        this.user.groups.push(newGroupId);
    });
  }

  onSetGroup(group: string) {
    console.log(group);
    this.userService.setGroup(group);
  }
}
