import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import styles from './CheckBox.modules.scss';

// const cx = classNames.bind(styles);

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };
    }

    handleChange(e) {
        const { checked } = e.target;

        this.setState({ checked });
        this.props.onChange(checked);
    }

    render() {
        return <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />;
    }
}

export default CheckBox;
