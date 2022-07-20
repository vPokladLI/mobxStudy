import { makeAutoObservable } from 'mobx';

import { v4 as uuid } from 'uuid';

export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}
class Todo {
  todos: ITodo[] = [{ id: '1', name: 'learn mobX', completed: false }];
  filter: String = '';
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo: ITodo) {
    todo.id = uuid();
    this.todos.unshift(todo);
    this.filter = '';
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(todo: ITodo) {
    todo.completed = !todo.completed;
  }
  addFilter(filter: String) {
    this.filter = filter;
  }
  get total() {
    return this.todos.length;
  }

  get done() {
    return this.todos.reduce((acc, obj) => {
      return acc + Number(obj.completed);
    }, 0);
  }

  get percentage() {
    return Math.round((this.done / this.total) * 100);
  }
}

export default new Todo();
