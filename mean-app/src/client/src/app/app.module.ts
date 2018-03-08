import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { TaskService } from './services/task.service'

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
