import React, {Component} from 'react';
import {USERS} from "../data/users";

const UserContext = React.createContext();
const {Provider, Consumer} =  UserContext;

class UserContextProvider extends Component{
    state = {
        users: USERS
    }

    deleteUser = (userId) =>{
        this.setState((prevState) => ({
            users: prevState.users.filter((user) =>{
                return user.id !== userId;
            })
        }));
    }

    render(){
        const {users} = this.state;

        return(
            <Provider value={{users, deleteUser: this.deleteUser}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContext, UserContextProvider, Consumer as UserContextConsumer}