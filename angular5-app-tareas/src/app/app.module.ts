import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// enviroment config
import { environment } from '../environments/environment';
//Componentes
import { TodoComponent } from './components/todo/todo.component';
//Toastr
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
//Services
import { TodoService } from './services/todo.service';
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
