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
        {todoList.map( (item) => {
          return (
            <TodoListItem key={item} />
          );
        })}
      </ul>
    );
}

export default TodoList;
