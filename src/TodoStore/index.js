import { autorun, observable } from "mobx"

class TodoStore {
  @observable todo = ["buy milk", "buy eggs"]
  @observable filter = ""
}

var store = (window.store = new TodoStore())

export default store

autorun(() => {
  console.log(store.filter)
  console.log(store.todo[0])
})
