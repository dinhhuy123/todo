import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import FilteredList from '~/components/FilteredList';
import { applyFilter } from '~/services';

const cx = classNames.bind(styles);

function TodoList(props) {
    const { items, filter, mode } = props.data;
    const { addNew, changeFilter, changeStatus } = props.actions;
    const count = items.length;
    const filteredItems = applyFilter(items, filter);

    return (
        <div className={cx('todo')}>
            <Header {...{ addNew, mode }} />
            <FilteredList items={filteredItems} changeStatus={changeStatus} />
            <Footer {...{ count, filter, changeFilter, mode }} />
        </div>
    );
}

export default TodoList;
