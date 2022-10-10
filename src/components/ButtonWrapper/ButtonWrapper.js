import React from 'react';
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from '~/services/mode';
import classNames from 'classnames/bind';
import styles from './ButtonWrapper.module.scss';

const cx = classNames.bind(styles);

function ButtonWrapper(props) {
    const { mode, count, changeMode } = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;

    return (
        <ul className={cx('list-footer')}>
            <li>
                <button
                    title="Add new"
                    className={cx('button', 'add', `${mode === MODE_CREATE ? 'selected' : ''}`)}
                    onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
                ></button>
                <button
                    title="Search"
                    className={cx('button', 'search', `${mode === MODE_SEARCH ? 'selected' : ''}`)}
                    onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
                ></button>
            </li>
            <li>
                <div className={cx('text')}>{`${count} items left`}</div>
            </li>
        </ul>
    );
}

export default ButtonWrapper;
