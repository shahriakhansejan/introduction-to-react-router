import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import './Users.css';

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Let me introduce</p>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;