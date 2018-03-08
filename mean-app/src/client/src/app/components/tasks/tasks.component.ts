import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { 
    this.taskService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
      })
  }

  ngOnInit() {
  }

}
