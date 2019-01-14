import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const Components = [
    LoginComponent,
    RegisterComponent
];

export const ComponentsObj = {
  "login":    LoginComponent,
  "register": RegisterComponent
}

@NgModule({
  imports: [
      CommonModule,
      MaterialModule
  ],
  exports:[
  ],
})


export class ComponentsModule { }
