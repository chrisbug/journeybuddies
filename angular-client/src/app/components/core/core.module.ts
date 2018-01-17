import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    NavComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    NavComponent
  ]

})
export class CoreModule { }
