import React from 'react';
import Filter from '~/components/Filter';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { MODE_CREATE, MODE_SEARCH } from '~/services';

const cx = classNames.bind(styles);

function Footer(props) {
    const { count, filter, changeFilter, mode } = props;

    return (
        <div className={cx('todo-footer')}>
            <div className={cx('pull-left')}>
                <ul className={cx('list-footer')}>
                    <li>
                        <button
                            title="Add new"
                            className={cx('button', 'add', `${mode === MODE_CREATE ? 'selected' : ''}`)}
                        ></button>
                        <button
                            title="Search"
                            className={cx('button', 'search', `${mode === MODE_SEARCH ? 'selected' : ''}`)}
                        ></button>
                    </li>
                    <li>
                        <div className={cx('text')}>{`${count} items left`}</div>
                    </li>
                </ul>
            </div>
            <div className={cx('pull-right')}>
                <Filter filter={filter} change={changeFilter} />
            </div>
        </div>
    );
}

export default Footer;
