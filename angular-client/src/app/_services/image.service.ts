import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ImageService {

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient,
    private user: UserService
  ) { }

  getImages() {
    return 'Still in dev';
  }

  uploadImage(image: File) {
    const headers = new HttpHeaders({
      'token': this.auth.getToken(),
      'groupid': this.user.getGroup(),
      '_id': this.user.getCurrentUserId()
    });
    const timeStamp = JSON.stringify(Date.now());
    console.log(timeStamp);
    const fd = new FormData();
    fd.append('image', image, timeStamp);
    fd.append('id', this.user.getCurrentUserId());
    fd.append('groupid', this.user.getGroup());
    console.log(fd.getAll('image'));
    return this.http.post(`${this.auth.getUrl()}uploadimage`, fd, {headers: headers});
  }

  getGroupImages() {
    const headers = new HttpHeaders({
      'token': this.auth.getToken(),
      'groupid': this.user.getGroup(),
      '_id': this.user.getCurrentUserId()});
    console.log(headers);
    return this.http.get<string[]>(`${this.auth.getUrl()}getimages`, {headers: headers});
  }

}
