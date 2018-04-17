import { ImageService } from './../../_services/image.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

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
    private imageService: ImageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.userService.getCurrentUserId()) {
      this.router.navigate(['login']);
    }
    this.onGetImages();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(res => {
        console.log('done');
        setTimeout(this.onGetImages(), 3000);
      });
    }
  }

  onGetImages() {
    this.imageService.getGroupImages().subscribe(res => {
      this.imageUrl = [];
      for (const val of res) {
        this.imageUrl.push(val);
      }
      console.log(this.imageUrl);
    });
  }

  onDeleteImage(image: string, i: number) {
    // Creates a path to image file on backend.
    const sections = image.split('/');
    const path = sections[3] + '/' + sections[4] + '/' + sections[5];
    console.log(path);
    this.imageService.deleteImage(path).subscribe(
      res => {
        this.imageUrl.splice(i, 1);
      }
    );
  }
}
