import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { CreateEventsComponent } from './components/create-events/create-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    CreateEventsComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
