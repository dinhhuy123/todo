import React from 'react';
import ClassNames from 'classnames/bind';
import styles from './FilteredList.module.scss';
import TodoItem from '~/components/TodoItem';

const cx = ClassNames.bind(styles);

function FilteredList(props) {
    const { items, changeStatus } = props;

    if (items.length === 0) {
        return <p className={cx('text')}>There are no items</p>;
    }
    return (
        <ul className={cx('filtered')}>
            {items.map((item) => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
            ))}
        </ul>
    );
}

export default FilteredList;
