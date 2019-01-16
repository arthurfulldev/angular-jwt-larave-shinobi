import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
      ReactiveFormsModule,
      FormsModule,
      MaterialModule
  ],
  exports:[
  ],
})


export class ComponentsModule { }
