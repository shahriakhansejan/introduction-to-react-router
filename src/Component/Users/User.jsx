import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;

   
    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '10px'
    }

    const handleShowDetail = () =>{
        navigate(`/user/${id}`);

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

User.propTypes = {
    
};

export default User;