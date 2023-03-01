import React from 'react';

function AddTodoForm(props) {
    
    function handleAddTodo(event) {
        event.preventDefault();
        let todoTitle = event.target.title;
        console.log(todoTitle);
        event.target.reset();
        //props.onAddTodo(todoTitle);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
