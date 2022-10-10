import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import TodoList from '~/components/TodoList';
import { StateProvider } from '~/components/StateProvider';
import { KeyStrokeHandler } from '~/components/KeyStrokeHandler';

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        return (
            <div className={cx('container')}>
                <div className="row">
                    <StateProvider>
                        <KeyStrokeHandler>
                            <TodoList />
                        </KeyStrokeHandler>
                    </StateProvider>
                </div>
            </div>
        );
    }
}

export default App;
