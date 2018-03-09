import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:8080';
  private socket: any;

  sendMessage(message: string, username: string, room:string){
    this.socket.emit('add-message', message, username, room);
  }
  constructor() { }

  getMessages(room: string) {
    const observable = new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message' + room, (data: any) => {
        observer.next(data);
      });
      return() => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
