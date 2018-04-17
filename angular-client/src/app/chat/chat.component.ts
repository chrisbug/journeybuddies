import { Router } from '@angular/router';
import { ChatService } from './../_services/chat.service';
import { UserService } from '../_services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../angular-client/src/app/_models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  reverseMessages = false;
  messages: any = [];
  message: string;
  connection: any;
  currentGroup: string;
  namespace = 'jpchats';
  room: string; // set to user active group
  username: string;
  constructor(private userService: UserService,
              private chatService: ChatService,
              private router: Router) { }

  // On connection the chatservice will recive new messages and
  // they will then be pushed into message array to be displayed to user.
  ngOnInit() {
    if (!this.userService.getCurrentUserId()) {
      this.router.navigate(['login']);
    }
    this.room = this.userService.getGroup();
    if (!this.room) {
      this.router.navigate(['profile']);
    }
    this.currentGroup = this.userService.getCurrentGroupName();
    this.userService.getMessages(this.room)
      .subscribe(result => {
          const oldMssages: any = result;
          for (const i of oldMssages) {
            this.messages.push(i);
          }
          this.messages = this.messages.reverse();
      });
    this.chatService.setRoom(this.room);
    this.username = this.userService.getCurrentUser().firstName;
    this.connection = this.chatService.getMessages(this.room).subscribe(message => {
      if (this.messages.lenght < 1) {
        this.messages.push(this.message);
      } else  {
        this.messages = this.messages.reverse();
        this.messages.push(message);
        this.messages = this.messages.reverse();
      }
    });
  }

  // We want the user to dissconect from chat and unscribe to stop memory leaks
  ngOnDestroy() {
    if (this.connection) {
      this.connection.unsubscribe();
    }
  }

  onSendMessage() {
    this.chatService.sendMessage(this.message, this.username, this.room);
    // this.messages.push({text: this.message, username: this.username});
    this.message = '';
  }

}
