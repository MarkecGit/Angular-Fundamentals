import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ], 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
