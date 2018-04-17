import { ImageuploadComponent } from './imageupload/imageupload.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const imageRoutes: Routes = [
  { path: 'images', component: ImageuploadComponent}
];
@NgModule({
  imports: [RouterModule.forChild(imageRoutes)],
  exports: [RouterModule]
})
export class ImageRoutingModule {}
