import React from "react";

import './App.css';

import TodoCounter from "./Components/TodoCounter/TodoCounter";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoList from "./Components/TodoList/TodoList";
import TodoItem from "./Components/TodoItem/TodoItem";
import TodoButton from "./Components/TodoButton/TodoButton";

const todos = [
  {text: 'Colocar Luces en Escenarios', completed: false},
  {text: 'Revisar Video de Unity 3D - Texturas', completed: false},
  {text: 'Terminar ciudad Araucaria', completed: false}
]

function App() {
  return (
    <div className="App">
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed= {todo.completed}/>))}
    </TodoList>
    <TodoButton/> 
    </div>

  );
}

export default App;
