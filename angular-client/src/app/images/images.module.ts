import { AuthGuard } from './../_guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ImageRoutingModule } from './images-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImageRoutingModule
  ],
  declarations: [ImageuploadComponent],
  exports: [
    ImageuploadComponent,
    ImageRoutingModule
  ]
})
export class ImagesModule { }
