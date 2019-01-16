import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { PipesModule } from './pipes/pipes.module';

import { ComponentsModule, Components, ComponentsObj } from './components/components.module'

export const appRouter: Routes = [
  { path: 'login', component: ComponentsObj.login },
  { path: "register", component: ComponentsObj.register },
  { path: "remember_pass", component: ComponentsObj.register },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    PipesModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  declarations: [
    Components
  ],
})

export class RoutesModule { }


