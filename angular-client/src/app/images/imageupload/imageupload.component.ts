import { ImageService } from './../../_services/image.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  imageUrl: string[];
  selectedFile: File = null;
  constructor(
    private http: HttpClient,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.onGetImages();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(res => {
        console.log('done');
        this.onGetImages();
      });
    }
  }

  onGetImages() {
    this.imageService.getGroupImages().subscribe(res => {
      this.imageUrl = res;
      console.log(this.imageUrl);
    });
  }
}
