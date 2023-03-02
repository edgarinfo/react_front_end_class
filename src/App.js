import React from 'react';
import AddTodoForm from './AddTodoForm.js';
import TodoList from './TodoList.js';

function App() {
  
  let [todoList, setTodoList] = React.useState([]); 
  
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
