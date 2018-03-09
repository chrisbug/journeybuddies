import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const chatRoutes: Routes = [
  {path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}