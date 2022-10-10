import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import styles from './StateProvider.module.scss';
import { FILTER_ALL } from '~/services/filter';
import { getAll, addToList, updateStatus } from '~/services/todo';
import { MODE_CREATE, MODE_NONE } from '~/services/mode';
import { objectWithOnly, wrapChildrenWith } from '~/util/common';

// const cx = classNames.bind(styles);

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
        };
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery']),
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, { text, completed: false });

        this.setState({ list: updatedList });
    }

    changeMode(mode = MODE_NONE) {
        this.setState({ mode });
    }

    setSearchQuery(text) {
        this.setState({ query: text || '' });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({ list: updatedList });
    }
}

export default StateProvider;
