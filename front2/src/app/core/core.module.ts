import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CoreRoutingModule } from './core-routing.module';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    NavComponent,
    HomeComponent,
    DropdownDirective
  ],
  exports: [
    CoreRoutingModule,
    NavComponent,
    DropdownDirective
  ]
})
export class CoreModule { }
