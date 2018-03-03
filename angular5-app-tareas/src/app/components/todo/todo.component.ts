import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoListArray: any[];
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.todoService
      .getTodoList()
      .snapshotChanges()
      .subscribe(item => {
        this.todoListArray = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.todoListArray.push(x);
        });

        this.todoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  addTodo(itemTitle) {
    this.todoService.addTodo(itemTitle.value);
      this.toastr.success("Tarea Agregado!!");
    
    itemTitle.value = null;
  }

  updateTodo($key: string, isChecked: boolean) {
    this.todoService.updateTodo($key, !isChecked);
      this.toastr.success("Estado de la Tarea Actualizado!!");
    
  }

  deleteTodo($key: string) {
    if (confirm("¿Esta Seguro que quiere eliminar?")) {
      this.todoService.deleteTodo($key);
      this.toastr.success("Tarea Eliminado!!");
    }
  }
}
