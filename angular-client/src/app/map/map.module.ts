import { AuthGuard } from './../_guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule
  ],
  declarations: [MapComponent],
  exports: [
    MapComponent,
    MapRoutingModule
  ]
})
export class MapModule { }
