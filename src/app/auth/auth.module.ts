import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InfoComponent } from './info/info.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent, InfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule

  ],
  exports:[  RouterModule]
})
export class AuthModule { }
