import React, { Component } from 'react';
import { UserContextConsumer } from '../../context/UserContext';
import UserCard from '../UserCard/UserCard';

class UserList extends Component {
    
    render() {
        return (
            <UserContextConsumer>
                {
                    ({ users, deleteUser }) => (
                        <div className="user-list">
                            {
                                users.map(user => <UserCard key={user.id} user={user} deleteUser={deleteUser} />)
                            }
                        </div>
                    )
                }
            </UserContextConsumer>
        )
    }
}

export default UserList;