import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { UpcomingRemindersComponent } from './upcoming-reminders/upcoming-reminders.component';
//import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TodosComponent,
    NotesComponent,
    UpcomingRemindersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MdbTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
