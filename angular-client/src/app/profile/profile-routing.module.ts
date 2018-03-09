import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const profileRoutes: Routes = [
  {path: 'profile',children:[
    {path: '' , component: ProfileComponent},
    {path: ':id', component: UserProfileComponent}
  ] },
]


@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
