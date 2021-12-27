import React from "react";

import './App.css';

import TodoCounter from "./Components/TodoCounter/TodoCounter";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoList from "./Components/TodoList/TodoList";
import TodoItem from "./Components/TodoItem/TodoItem";
import TodoButton from "./Components/TodoButton/TodoButton";

const todos = [
  {text: 'Cortar cebollas', completed: false},
  {text: 'Tomar curso de React', completed: false},
  {text: 'Terminar ciudad videojuegos', completed: false}
]

function App() {
  return (
    <div className="App">
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (<TodoItem text={todo.text}/>))}
    </TodoList>
    <TodoButton/> 
    </div>

  );
}

export default App;
