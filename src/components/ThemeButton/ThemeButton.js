import React, { Component } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

class ThemeButton extends Component {
    handlerClick = () => {
        const { toggleTheme } = this.context;
        toggleTheme();
    }

    render() {
        return (
            <button className={`${this.props.theme} button-theme`} onClick={this.handlerClick}>Toggle Theme</button>
        )


    }
}

ThemeButton.contextType = ThemeContext;
export default ThemeButton;