import React from 'react';
import TodoListItem from './TodoListItem.js';

function TodoList(props) {

  return (
    <ul>
      {props.todoList.map( (todo) => {
        return (
          <TodoListItem key={todo.id} item={todo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
