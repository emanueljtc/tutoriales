import { Injectable } from '@angular/core';

import { Task } from '../models/task';
@Injectable()
export class DataService {
  tasks: Task[];

  constructor() { 
    this.tasks = [];
  }

  getTask(): Task[]{
    if(localStorage.getItem('task') == null){
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task: Task):void {
    this.tasks.unshift(task);
    let tasks;
    if(localStorage.getItem('tasks') == null){
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
}
