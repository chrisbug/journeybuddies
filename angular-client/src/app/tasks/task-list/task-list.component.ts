import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../_services/user.service';
import { TaskService } from './../../_services/task.service';
import { Task } from './../../_models/task';
import { Component, OnInit, group } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  showTaskBox = true;
  tasks: Task[] = [];
  task = {
    taskTitle: '',
    taskDescription: '',
    taskfor: '',
    completed: false
  };
  taskToDelete: any;
  group: string;
  userId: string;
  constructor(
   private taskService: TaskService,
   private userService: UserService,
   private router: Router
  ) { }

  showAddTaskBox() {
    this.showTaskBox = !this.showTaskBox;
  }

  ngOnInit() {
    if (!this.userService.getCurrentUserId()) {
      this.router.navigate(['login']);
    }
    this.userId = this.userService.getCurrentUserId();
    this.group = this.userService.getGroup();
    this.taskService.getTasks(this.group, this.userId)
      .subscribe(response =>  this.tasks = response);
  }

  onAddTask(task: Task) {
    if (!task) { return; }
    this.tasks.push(task);
    this.showAddTaskBox();
    this.taskService.addTask(this.group, this.userId, task)
    .subscribe();
  }

  onMarkComplete(task: Task) {
    let index = 0;
    for (const value of this.tasks) {
      if (value.taskTitle === task.taskTitle) {
        task.completed = true;
        this.taskService.markComplete(this.group, this.userId, value.taskTitle).subscribe();
      }
      index++;
    }
  }

  onDeleteTask(task: Task) {
    console.log(this.tasks);
    console.log(this.tasks.length);
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].taskTitle === task.taskTitle) {
        this.taskService.deleteTask(this.group, this.userId, task.taskTitle).subscribe();
        this.tasks.splice(i, 1);
      }
    }
  }

  onSubmit(taskForm: NgForm) {
    const task = {
      taskTitle: taskForm.value.taskTitle,
      taskDescription: taskForm.value.taskDescription,
      taskfor: taskForm.value.taskfor,
      completed: false
    };
    console.log(task);
    console.log(taskForm.value);
    this.onAddTask(task);
  }
}
