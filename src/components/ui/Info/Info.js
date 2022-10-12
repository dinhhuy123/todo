import React from 'react';
import { MODE_NONE } from '~/services/mode';
import classNames from 'classnames/bind';
import styles from './Info.module.scss';
const cx = classNames.bind(styles);

function Info(props) {
    const INFO_SHORTCUT_KEYS = "Press 'S' to search and 'C' to create new item.";
    const INFO_CANCEL_SHORTCUT_KEY = "Press 'ESC' to cancel.";
    const message = props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

    return <p className={cx('info')}>{message}</p>;
}

export default Info;
