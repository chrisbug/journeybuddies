import {NgModule} from '@angular/core';
import { HomeComponent } from './components/core/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'signin', loadChildren: './components/auth/auth.module#AuthModule'}
];

@NgModule({
  import: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
