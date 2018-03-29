import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  selectedFile: File = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
    this.http.post('urlendpoint here', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
}
