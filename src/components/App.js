import React from 'react';
import TodoList from './TodoList';

function App() {
    let items = [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
        },
    ];
    let title = 'Things to do';
    return <TodoList title={title} items={items} />;
}

export default App;