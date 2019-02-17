import { action, observable, decorate } from "mobx"


class TodoStore{
  todos = []
  loading = false
  addTodo = (newTask) => {
    this.todos = [...this.todos, newTask]
  }
  todoCount = this.todos.length
}

decorate(TodoStore, {
  todos: observable,
  loading: observable,
  addTodo: action,
} )

export default new TodoStore()