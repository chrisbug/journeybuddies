import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
  //Sample{path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
