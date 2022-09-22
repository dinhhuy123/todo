import React from 'react';
import Filter from '~/components/Filter';
import classNames from 'classnames/bind';
import styles from './Footer.modules.scss';

const cx = classNames.bind(styles);

function Footer(props) {
    const { count, filter, changeFilter } = props;

    return (
        <div className={cx('todo-footer clear-fix')}>
            <div className={cx('footer pull-left')}>
                <strong>
                    <span>{count}</span>
                </strong>
                {' items left'}
            </div>
            <div>
                <Filter filter={filter} change={changeFilter} />
            </div>
        </div>
    );
}

export default Footer;
