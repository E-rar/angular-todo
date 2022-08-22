import { Component, OnInit } from '@angular/core';
import { ITodo } from './i-todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const data = localStorage.getItem('todos');
    if (data !== '' && data !== null) {
      this.todos = JSON.parse(data);
    }
  }

  todos:ITodo[] = [];
  newTodo = '';

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
    this.storeTodos();
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.storeTodos();
  }
  setTodo(event: KeyboardEvent) {
    this.newTodo = (event.target as HTMLInputElement).value;
  }
  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ todo: this.newTodo, done: false });
    }
    this.storeTodos();
  }
  storeTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  countOpenTodo() {
    const countOpenTodo = this.todos.filter((item) => {
      return !item.done;
    });
    return countOpenTodo.length;
  }
  title = 'my-app';
}
