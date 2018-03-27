import { Task } from './../_models/task';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  url: string;
  constructor(
    private http: HttpClient,
    private authencationService: AuthenticationService) {
    this.url = authencationService.getUrl();
   }

  getTasks(groupId: string, _id: string) {
    return this.http.post<Task[]>(`${this.url}gettasks`,
    {token: this.authencationService.getToken(), _id: _id, groupid: groupId})
    .pipe(
      tap((tasks: Task[]) => console.log(tasks))
      );
  }

  addTask(groupId: string, _id: string, task: Task) {
    return this.http.post(`${this.url}addtask`,
    { token: this.authencationService.getToken(), _id: _id, groupid: groupId, task: task});
  }

  markComplete(groupId: string, _id: string, taskTitle: string) {
    return this.http.post(`${this.url}marktaskcomplete`,
      { token: this.authencationService.getToken(), _id: _id, groupid: groupId, taskTitle: taskTitle });
  }

  deleteTask(groupId: string, _id: string, taskid: number) {
    return this.http.post(`${this.url}deletetask`,
      { token: this.authencationService.getToken(), _id: _id, groupid: groupId, taskid: taskid });
  }
}
