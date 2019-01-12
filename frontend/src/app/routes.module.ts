import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "remember_pass", component: RegisterComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
})

export class RoutesModule { }


