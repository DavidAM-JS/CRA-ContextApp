import React, { Component} from 'react';
import { LoginContext } from '../../context/LoginContext';
import './styles.css';

class LoginButton extends Component {
    handlerClick = () => {
        const { toggleLoginInfo } = this.context;
        toggleLoginInfo(this.props.userId);
    }

    render(){
        return(
            <button className={`${this.props.theme} button-login`} onClick={this.handlerClick}>{`${this.props.isLoggedIn ? 'Log out': 'Log In'}`}</button>
        )
    }
}

LoginButton.contextType = LoginContext;
export default LoginButton;