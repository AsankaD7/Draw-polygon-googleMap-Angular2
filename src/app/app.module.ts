import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { PolygonComponent } from './polygon/polygon.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAunL58k9yiEWgJAElfqvku1sMrklQYZ50'
    })
  ],
  providers: [],
  declarations: [ AppComponent, PolygonComponent ],
  bootstrap: [ PolygonComponent ]
})
export class AppModule {
}