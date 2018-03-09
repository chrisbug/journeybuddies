import { ChatModule } from './chat/chat.module';
import { ChatService } from './_services/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { HttpModule } from '@angular/http';
import { UserService } from './_services/user.service';
import { AppComponent } from './app.component';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    AuthModule,
    ProfileModule,
    ChatModule
  ],
  providers: [AuthenticationService, UserService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
