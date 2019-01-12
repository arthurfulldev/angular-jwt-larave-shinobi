import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRouter: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "remember_pass", component: RegisterComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }
]

@NgModule({
  imports: [
      CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
      LoginComponent,
      RegisterComponent
  ]
})

export class ComponentsModule { }
