import React from 'react'
import TodoCreator from './containers/TodoCreator/TodoCreator'
import TodoFilter from './containers/TodoFilter/TodoFilter'
import TodoList from './containers/TodoList/TodoList'

function TodoApp() {
  return (
    <div>
      <TodoCreator/>
      <TodoList/>
      <TodoFilter/>
    </div>
  )
}

export default TodoApp