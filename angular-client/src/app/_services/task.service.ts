import { Task } from './../_models/task';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'token': this.authencationService.getToken(),
      'groupid': groupId,
      '_id': _id
    });
    return this.http.get<Task[]>(`${this.url}gettasks`, {headers: headers});
  }

  addTask(groupId: string, _id: string, task: Task) {
    return this.http.post(`${this.url}addtask`,
    { token: this.authencationService.getToken(), _id: _id, groupid: groupId, task: task});
  }

  markComplete(groupId: string, _id: string, taskTitle: string) {
    return this.http.post(`${this.url}marktaskcomplete`,
      { token: this.authencationService.getToken(), _id: _id, groupid: groupId, taskTitle: taskTitle });
  }

  deleteTask(groupId: string, _id: string, taskTitle: string) {
    console.log(taskTitle);
    const headers = new HttpHeaders({
      'token': this.authencationService.getToken(),
      'groupid': groupId,
      '_id': _id,
      'tasktitle': taskTitle
    });
    return this.http.delete(`${this.url}deletetask`, { headers: headers });
  }
}
