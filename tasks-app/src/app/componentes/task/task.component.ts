import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../models/task";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  removerTask(task: Task){
    const response = confirm('Estas seguro de querer eliminar');
    if(response){
      this.dataService.removeTask(task); 
    }
  }
}
