import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorningComponent } from './morning/morning.component';
import { EveningComponent } from './evening/evening.component';

@NgModule({
  declarations: [
    AppComponent,
    MorningComponent,
    EveningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
