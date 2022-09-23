import React, { Component } from 'react';
import TodoList from '~/components/TodoList';
import { FILTER_ACTIVE, getAll, createNew, updateStatus } from './services';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ACTIVE,
            items: getAll(),
        };
    }

    render() {
        let title = 'Things to do';
        return (
            <div className="container">
                <div className="row">
                    <TodoList
                        title={title}
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        changeStatus={this.changeStatus.bind(this)}
                        {...this.state}
                    />
                </div>
            </div>
        );
    }

    addNew(text) {
        let item = createNew(text);
        let updateList = this.state.items.concat([item]);

        this.setState({
            items: updateList,
        });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updateList = updateStatus(this.state.items, itemId, completed);

        this.setState({ items: updateList });
    }
}

export default App;
