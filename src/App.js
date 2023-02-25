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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item) {
          return (
            <li>This id value is: {item.id} and title is: {item.title}</li>
            )
        })}
      </ul>
    </div>
  );
}

export default App;
