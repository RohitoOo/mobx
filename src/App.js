import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import TodoList from "./TodoList"
import store from "./TodoStore"

import {inject, observer} from 'mobx-react'
import {compose} from 'recompose'
class App extends Component {
  render() {
    const stores = this.props 
    return (
      <div className="App">
        <TodoList {...stores} />
      </div>
    )
  }
}


const AppEnhanced = compose(
inject("TodoStore"),
observer

)(App)


export default AppEnhanced
