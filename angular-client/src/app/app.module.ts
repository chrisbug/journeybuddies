import { AuthGuard } from './_guards/auth.guard';
import { ImageService } from './_services/image.service';
import { ImagesModule } from './images/images.module';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './_services/task.service';
import { AgmCoreModule, AgmMap } from '@agm/core';
import { MapModule } from './map/map.module';
import { MapService } from './_services/map.service';
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
    ChatModule,
    MapModule,
    TasksModule,
    ImagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5eQniYJCql71bD7mffKxVBCNr1hIV7JU'
    })
  ],
  providers: [AuthenticationService, UserService, ChatService, MapService, TaskService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
