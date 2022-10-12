import React from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { getOptions } from '~/services/filter';

const cx = classNames.bind(styles);

function Filter(props) {
    const options = getOptions();
    const { filter, changeFilter } = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul className={cx('filter')}>
            {Object.keys(options).map((key) => (
                <li key={key}>
                    <span onClick={() => changeFilter(key)} className={cx(`${getClass(key)}`)}>
                        {options[key]}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Filter;
