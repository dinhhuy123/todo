import React from 'react';
import TodoItem from '~/components/TodoItem';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './TodoList.modules.scss';
import { applyFilter } from '~/services/filter';

const cx = classNames.bind(styles);

function TodoList(props) {
    const { title, items, addNew, filter, changeFilter } = props;
    const count = items.length;

    const filteredList = applyFilter(items, filter);

    return (
        <div className={cx('todo-list')}>
            <Header title={title} addNew={addNew} />
            <ul className={cx('list-unstyled')}>
                {filteredList.map((item) => (
                    <TodoItem key={item.id} data={item} />
                ))}
            </ul>
            <Footer {...{ count, filter, changeFilter }} />
        </div>
    );
}

export default TodoList;
