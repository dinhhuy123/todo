import React from 'react';
import InputBox from '~/components/InputBox';
import classNames from 'classnames/bind';
import styles from './Header.modules.scss';

const cx = classNames.bind(styles);

function Header({ title, addNew }) {
    return (
        <header>
            <h1 className={cx('header')}>{title.toUpperCase()}</h1>
            <InputBox addNew={addNew} />
        </header>
    );
}

export default Header;
