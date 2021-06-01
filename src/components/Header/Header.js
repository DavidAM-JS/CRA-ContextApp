import React, { Component } from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';
import { ThemeContextConsumer } from '../../context/ThemeContext';
import './styles.css';

class Header extends Component {
    render() {
        return (
            <ThemeContextConsumer>
                {
                    ({theme}) => (
                        <header className={`${theme} header`}>
                            <h1 className={`${theme} header`}>CRA-ContextApp</h1>
                            <ThemeButton theme={theme}/>
                        </header>
                    )
                }
            </ThemeContextConsumer>
        )
    }
}

export default Header;