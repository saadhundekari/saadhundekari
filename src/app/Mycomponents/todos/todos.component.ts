import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Output()todoDelete: EventEmitter<Todo> = new EventEmitter();

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title: "This is title1",
        desc: "description",
        active : true,
      },
      {
        sno:2,
        title: "This is title2",
        desc: "description",
        active : true,
      },
      {
        sno:3,
        title: "This is title3",
        desc: "description",
        active : true,
      },
    ]
   }

  ngOnInit(): void {
  }
  onclick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggerd")
  }

}
