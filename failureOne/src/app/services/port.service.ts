import { Injectable } from '@angular/core';

//Simple service that will be responsible for dishing out port number.
@Injectable()
export class PortService {

  constructor() { }

  getPort(){
    return '127.0.0.1:3000';
  }

}
