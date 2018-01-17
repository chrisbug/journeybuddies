import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Custom modules
import { CoreModule } from './components/core/core.module';
import { AlertComponent } from './components/alert/alert.component';
import { AuthModule } from './components/auth/auth.module';

//services
import { PortService } from './services/port.service';
import { AuthService } from './services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import {AlertService } from './services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AuthModule,
    RouterModule
  ],
  providers: [PortService, AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
