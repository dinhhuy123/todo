import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import styles from './StateProvider.module.scss';
import { FILTER_ALL } from '~/services';
import { getAll, addToList, updateStatus } from '~/services';
import { objectWithOnly, wrapChildrenWith } from '~/util/common';
import { MODE_CREATE } from '~/services';

// const cx = classNames.bind(styles);

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            items: getAll(),
        };
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus']),
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, { text, completed: false });

        this.setState({ items: updatedList });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);

        this.setState({ items: updatedList });
    }
}

export default StateProvider;
