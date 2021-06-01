import React, { Component } from 'react';
import { LOGIN_INFO } from '../data/loginInfo';

const LoginContext = React.createContext();
const { Provider, Consumer } = LoginContext;

class LoginContextProvider extends Component {
    state = {
        loginInfo: LOGIN_INFO,
    }

    toggleLoginInfo = (userId) => {
        this.setState((prevState) => ({
            loginInfo: prevState.loginInfo.map((info) => {
                return (info.id === userId) ? { ...info, isLoggedIn: !info.isLoggedIn } : info
            }),
        }));
    }

    render() {
        const { loginInfo } = this.state;

        return (
            <Provider value={{loginInfo, toggleLoginInfo: this.toggleLoginInfo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export { LoginContext, LoginContextProvider, Consumer as LoginContextConsumer }