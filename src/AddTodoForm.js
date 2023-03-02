import React from 'react';

function AddTodoForm(props) {
    
    let [todoTitle, setTodoTitle] = React.useState('');

    function handleTitleChange(event) {
        let newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        props.onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        todoTitle = '';
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
