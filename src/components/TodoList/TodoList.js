import React from 'react';
import TodoItem from '~/components/TodoItem';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './TodoList.modules.scss';

const cx = classNames.bind(styles);

function TodoList({ title, items, addNew }) {
    const count = items.length;

    return (
        <div className={cx('todo-list')}>
            <Header title={title} addNew={addNew} />
            <ul className={cx('list-unstyled')}>
                {items.map((item) => (
                    <TodoItem key={item.id} data={item} />
                ))}
            </ul>
            <Footer count={count} />
        </div>
    );
}

export default TodoList;
