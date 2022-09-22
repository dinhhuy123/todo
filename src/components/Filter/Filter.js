import React from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.modules.scss';
import { getOptions } from '~/services/filter';

const cx = classNames.bind(styles);

const options = getOptions();

function Filter(props) {
    const { filter, change } = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul className={cx('filters list-unstyled clear-fix')}>
            {Object.keys(options).map((key) => (
                <li key={key}>
                    <span onClick={() => change(key)} className={cx(`${getClass(key)}`)}>
                        {options[key]}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Filter;
