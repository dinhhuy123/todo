import React from 'react';
import * as Keycode from 'keycode-js';
import classNames from 'classnames/bind';
import styles from './InputBox.modules.scss';

const cx = classNames.bind(styles);

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ``,
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    clear() {
        this.setState({ value: '' });
    }

    handleKeyUp(e) {
        const { addNew } = this.props;
        const text = this.state.value.trim();

        if (e.keyCode === Keycode.KEY_RETURN) {
            addNew(text);
            this.clear();
        }
    }

    render() {
        return (
            <>
                {/* <button onClick={this.handleKeyUp}>Add</button> */}
                <input
                    type="text"
                    className={cx('form-control add-todo')}
                    value={this.state.value}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Add New"
                />
            </>
        );
    }
}

export default InputBox;