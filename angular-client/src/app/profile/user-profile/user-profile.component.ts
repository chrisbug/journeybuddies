import { NgForm } from '@angular/forms';
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
  currentGroup: string;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    if (!this.userService.getCurrentUserId()) {
      this.router.navigate(['login']);
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.userService.getUser(this.id).subscribe(
            (response => {
              this.user = response;
            if (!this.userService.getGroup() && this.user.groups.length > 0) {
                console.log('prelected user');
                this.userService.setGroup(this.user.groups[0].id);
                this.userService.setCurrentGroupName(this.user.groups[0].name);
                this.currentGroup = this.user.groups[0].name;
              }
              console.log(this.user.groups);
            })
          );
      });
  }

  onAddGroup(form: NgForm) {
    const groupName = form.value.groupName;
    this.userService.createGroup(this.user._id, this.user.email, groupName)
      .subscribe(response => {
        console.log(response);
        const newGroupId: any = response;
        this.user.groups.push({
          id: newGroupId,
          name: groupName,
          admin: this.userService.getCurrentUserId(),
          users: []
        });
    });
  }

  onSetGroup(group: any) {
    console.log('changed to ' + group._id);
    this.currentGroup = group.name;
    this.userService.setGroup(group._id);
    this.userService.setCurrentGroupName(group.name);
  }

  onAddUserToGroup(form: NgForm) {
    const email = form.value.useremail;
    console.log(form.value.useremail);
    this.userService.addUserToGroup(email).subscribe();
  }

  checkActiveGroup(name: string, id: string) {
    console.log(name + ' ' + id);
    if ((name === this.currentGroup) && (id === this.userService.getGroup())) {
      return true;
    }
    return false;
  }
}
