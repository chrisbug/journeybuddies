import { MapComponent } from './map.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const mapRoutes: Routes = [
  { path: 'maps', component: MapComponent }
];
@NgModule({
  imports: [RouterModule.forChild(mapRoutes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
