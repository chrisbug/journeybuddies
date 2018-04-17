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
  messages: any = [];
  message: string;
  connection: any;
  currentGroup: string;
  namespace = 'jpchats';
  room: string; // set to user active group
  username: string;
  constructor(private userService: UserService,
              private chatService: ChatService) { }

  // On connection the chatservice will recive new messages and
  // they will then be pushed into message array to be displayed to user.
  ngOnInit() {
    this.room = this.userService.getGroup();
    this.currentGroup = this.userService.getCurrentGroupName();
    this.userService.getMessages(this.room)
      .subscribe(result => {
          const oldMssages: any = result;
          for (const i of oldMssages) {
            console.log(i);
            this.messages.push(i);
          }
      });
    console.log(this.room);
    this.chatService.setRoom(this.room);
    this.username = this.userService.getCurrentUser().firstName;
    this.connection = this.chatService.getMessages(this.room).subscribe(message => {
      console.log(message);
      this.messages.push(message);
    });
  }

  // We want the user to dissconect from chat and unscribe to stop memory leaks
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  onSendMessage() {
    console.log('Event works');
    console.log(this.message);
    this.chatService.sendMessage(this.message, this.username, this.room);
    // this.messages.push({text: this.message, username: this.username});
    this.message = '';
  }

}
