import React from 'react';
import Filter from '~/components/ui/Filter';
import ButtonWrapper from '~/components/ui/ButtonWrapper';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

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
