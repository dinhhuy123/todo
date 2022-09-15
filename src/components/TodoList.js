import React from 'react';
import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';

function TodoList(props) {
    const { title, items } = props;
    const count = items.length;

    return (
        <div className="todolist">
            <Header title={title} />
            <ul className="list-unstyled">
                {items.map((item) => (
                    <TodoItem data={item} />
                ))}
            </ul>
            <Footer count={count} />
        </div>
    );
}

export default TodoList;
