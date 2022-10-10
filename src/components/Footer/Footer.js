import React from 'react';
import Filter from '~/components/Filter';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ButtonWrapper from '~/components/ButtonWrapper';

const cx = classNames.bind(styles);

function Footer(props) {
    const { filter, changeFilter } = props;

    return (
        <div className={cx('todo-footer')}>
            <div className={cx('pull-left')}>
                <ButtonWrapper {...props} />
            </div>
            <div className={cx('pull-right')}>
                <Filter {...{ filter, changeFilter }} />
            </div>
        </div>
    );
}

export default Footer;
