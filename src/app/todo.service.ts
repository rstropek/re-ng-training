import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems = ['Jogging', 'Cooking'];

  constructor() { }


  addTodoItem(newTodoItem: string) {
    this.todoItems.push(newTodoItem);
  }

  removeTodoItem(index: number) {
    this.todoItems.splice(index, 1);
  }

}
