import React from 'react';
import InputWrapper from '~/components/ui/InputWrapper';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header>
            <h1 className={cx('header')}>Things To Do</h1>
            <InputWrapper {...props} />
        </header>
    );
}

export default Header;
