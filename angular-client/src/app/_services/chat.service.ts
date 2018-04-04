import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:8080';
  private socket: any;
  private room: string;

  sendMessage(message: string, username: string, room: string) {
    this.socket.emit('add-message', message, username, room);
  }
  constructor() { }

  getMessages(room: string) {
    console.log('Messages running');
    const observable = new Observable((observer: any) => {
      this.socket = io(this.url + '/rooms' );
      console.log('message' + room);
      this.socket.emit('room', room);
      this.socket.on('message' + room, (data: any) => {
        console.log('new message');
        observer.next(data);
      });
      return() => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  setRoom(room: string) {
    this.room = room;
  }



}
