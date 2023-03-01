import React from 'react';

function TodoListItem(props) {
    return (
        <li>This id value is: {props.id} and title is: {props.title}</li>
    );
}

export default TodoListItem;
