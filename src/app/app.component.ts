import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-demo',
  template: '<p>Hello from Demo</p>',
  styleUrls: []
})
export class DemoComponent {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexCurrentItem = -1;
  newTodoItem = '';
  //todoItems = ['Jogging', 'Cooking'];

  constructor(public todoService: TodoService, private client: HttpClient) {}

  get isUpdating() {
    return this.indexCurrentItem > -1;
  }

  addTodoItem() {
    this.todoService.addTodoItem(this.newTodoItem);
    //this.todoService.todoItems.push(this.newTodoItem);
  }

  removeTodoItem(index: number) {
    this.todoService.removeTodoItem(index);
    //this.todoService.todoItems.splice(index, 1);
  }

  editTodoItem(item: string, index: number) {
    this.newTodoItem = item;
    this.indexCurrentItem = index;
  }

  updateTodoItem() {
    this.todoService.todoItems[this.indexCurrentItem] = this.newTodoItem;
    this.indexCurrentItem = -1;
  }
}
