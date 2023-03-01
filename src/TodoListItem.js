import React from 'react';

function TodoListItem(props) {

    return (
        <li>Title is: {props.item.title}</li>
    );
}

export default TodoListItem;
