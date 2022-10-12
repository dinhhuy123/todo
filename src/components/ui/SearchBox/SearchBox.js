import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';

const cx = classNames.bind(styles);

function SearchBox(props) {
    const { query, setSearchQuery } = props;
    return (
        <input
            type="text"
            autoFocus
            className={cx('form-search', 'search')}
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}

export default SearchBox;
