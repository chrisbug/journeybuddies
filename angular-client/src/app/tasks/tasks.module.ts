import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [
    TaskListComponent
  ],
  exports: [
    TaskListComponent,
    TasksRoutingModule
  ]
})
export class TasksModule { }
