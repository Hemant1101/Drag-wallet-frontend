import { ProfileEditPage } from './profile-edit/profile-edit.page';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'profile_edit',
    component: ProfileEditPage
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
