import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibexModule } from './libex';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
