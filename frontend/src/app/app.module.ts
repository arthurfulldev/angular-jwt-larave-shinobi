import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes.module';

import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
  ],
  exports:[
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
