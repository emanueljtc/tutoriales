import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operators/map";

import { Task } from ;
@Injectable()
export class TaskService {
  domain: string = "http://localhost:3000/";
  constructor( private http: HttpClient) {

   }

   getTasks(){
      this.http.get(`${this.domain}/api/tasks`)
      .map(res => res);
   }

   addTask(){}

   updateTask(){}

   deleteTask(){}
}
