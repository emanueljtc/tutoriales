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

//Services
import { TodoService } from './services/todo.service';
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
