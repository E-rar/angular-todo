import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo={todo:"",done:false}
  @Input() index=0;

  @Output() todoIndex = new EventEmitter<number>(); 
  @Output() deleteIndex = new EventEmitter<number>(); 


  toggleTodo(){
    this.todoIndex.emit(this.index);
  }

  deleteTodo(){
    this.deleteIndex.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
