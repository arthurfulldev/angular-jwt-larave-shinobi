import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import { appRouter, ComponentsModule } from './components/components.module'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,

    RouterModule.forRoot(appRouter)
  ],
  exports: [ RouterModule ],
  declarations: [
      LoginComponent,
      RegisterComponent
  ],
})

export class RoutesModule { }


