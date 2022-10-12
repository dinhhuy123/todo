import React from 'react';
import { CheckBox } from '~/components/ui/CheckBox';
import classNames from 'classnames/bind';
import styles from './TodoItem.modules.scss';

const cx = classNames.bind(styles);

function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);

    return (
        <li key={data.id} className={cx('item', 'default', `${data.completed === true ? 'completed' : 'pending'}`)}>
            <div className={cx('checkbox')}>
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange} /> {data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;
