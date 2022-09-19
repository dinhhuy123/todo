import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.modules.scss';

const cx = classNames.bind(styles);

function TodoItem({ data }) {
    return (
        <li key={data.id} className={cx('ui-state-default')}>
            <div className={cx('checkbox')}>
                <label>
                    <input type="checkbox" value="" /> {data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;
