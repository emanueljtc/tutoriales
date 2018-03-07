import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { TasksListComponent } from './componentes/tasks-list/tasks-list.component';
import { TaskComponent } from './componentes/task/task.component';

import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskAddComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
