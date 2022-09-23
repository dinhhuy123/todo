import React from 'react';
import TodoItem from '~/components/TodoItem';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './TodoList.modules.scss';
import { applyFilter } from '~/services/filter';

const cx = classNames.bind(styles);

function TodoList(props) {
    const { title, items, addNew, filter, changeFilter, changeStatus } = props;
    const count = items.length;

    const filteredList = applyFilter(items, filter);

    return (
        <div className={cx('todo-list')}>
            <Header title={title} addNew={addNew} />
            {filteredList.length > 0 ? (
                <ul className={cx('list-unstyled')}>
                    {filteredList.map((item) => (
                        <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
                    ))}
                </ul>
            ) : (
                <p className={cx('alert alert-info')}>There are no items.</p>
            )}
            <Footer {...{ count, filter, changeFilter }} />
        </div>
    );
}

export default TodoList;
