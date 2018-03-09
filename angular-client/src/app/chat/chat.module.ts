import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ],
  declarations: [
    ChatComponent
  ],
  exports: [
    ChatComponent,
    ChatRoutingModule
  ]
})
export class ChatModule { }
