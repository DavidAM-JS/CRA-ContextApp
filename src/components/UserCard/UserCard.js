import React, { Component } from 'react';
import { LoginContext } from '../../context/LoginContext';
import LoginButton from '../LoginButton/LoginButton'
import { ThemeContextConsumer } from '../../context/ThemeContext';
import './styles.css'

class UserCard extends Component {

    handleOnDelete = () => {
        const { user, deleteUser } = this.props;
        deleteUser(user.id);
    }

    render() {
        const { id, name, avatar, biography } = this.props.user;
        const { loginInfo } = this.context;
        const userInfo = loginInfo.filter((user) => user.id === id);
        const { username, password, isLoggedIn } = userInfo[0];

        return (
            <ThemeContextConsumer>
                {
                    ({ theme }) => (
                        <div className={`user-container ${theme}`}>
                            <div className={`${isLoggedIn ? 'buttons' : 'buttons-collapse'}`}>
                                <LoginButton userId={id} theme={theme} isLoggedIn={isLoggedIn} />
                                <div>
                                    {
                                        isLoggedIn ?
                                            <button className={`button-delete ${theme}`} onClick={this.handleOnDelete}>Delete</button> : null
                                    }
                                </div>
                            </div>
                            {
                                isLoggedIn ?
                                    <div className={`user-info ${theme}`}>
                                        <img src={avatar} alt={avatar} className="avatar" />
                                        <div className="user-about-info">
                                            <h1>{name}</h1>
                                            <p>{biography}</p>
                                            <div className="user-count-info">
                                                <p>{`User: ${username}`}</p>
                                                <p>{`Password: ${password}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                    : <span className="login-advice">Login to see {name} information</span>
                            }
                        </div>
                    )
                }
            </ThemeContextConsumer>
        )
    }
}

UserCard.contextType = LoginContext;
export default UserCard;