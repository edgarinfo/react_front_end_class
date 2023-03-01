import React from 'react';
import TodoListItem from './TodoListItem.js';

const todoList = [
    {
      id: 1,
      title: "complete"
    },
    {
      id: 2,
      title: "hold"
    },
    {
      id: 3,
      title: "in process"
    }
];

function TodoList() {
    return (
      <ul>
        {todoList.map( function(todo) {
          return (
            <TodoListItem key={todo.id} item={todo} />
          );
        })}
      </ul>
    );
}

export default TodoList;
