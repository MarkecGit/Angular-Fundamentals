import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import { EventsAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
//import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent  } from './common/index'; 
import { appRoutes} from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CollapsibleWellComponent } from './common/collapsible-well.component';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ], 
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    AuthService,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent)
{ 
  if (component.isDirty)
    return window.confirm('Not saved, do you want cancel?');
    
  return true;
}
