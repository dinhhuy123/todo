import React from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.modules.scss';

const cx = classNames.bind(styles);

function Filter(props) {
    return (
        <ul className={cx('filters list-unstyled clearfix')}>
            <li>
                <span className="selected">All</span>
            </li>
            <li>
                <span>Active</span>
            </li>
            <li>
                <span>Completed</span>
            </li>
        </ul>
    );
}

export default Filter;
