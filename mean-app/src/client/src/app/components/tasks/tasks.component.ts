import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  ngOnInit() {}

  addTask(event) {
     event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.title = "";
    });
  }

  deleteTask(id: string) {
   const tasks = this.tasks;
   this.taskService.deleteTask(id)
    .subscribe(data => {
      console.log(data)
    })
  }
}
