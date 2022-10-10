import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import FilteredList from '~/components/FilteredList';
import { applyFilter, search } from '~/services/filter';

const cx = classNames.bind(styles);

function TodoList(props) {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;
    const count = list.filter((list) => !list.completed).length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className={cx('todo')}>
            <Header {...{ addNew, mode, query, setSearchQuery }} />
            <FilteredList {...{ items, changeStatus }} />
            <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
        </div>
    );
}

export default TodoList;
