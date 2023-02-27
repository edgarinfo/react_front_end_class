import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList.js';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
