import React from 'react';

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
        {todoList.map(function(item) {
          return (
            <li>This id value is: {item.id} and title is: {item.title}</li>
            )
        })}
      </ul>
    );
}

export default TodoList;
