import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { UpcomingRemindersComponent } from './upcoming-reminders/upcoming-reminders.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'todo',
    component: TodosComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'upcomingReminders',
    component: UpcomingRemindersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
