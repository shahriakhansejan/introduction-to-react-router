import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const{id,name,email,website} = user;

    const backUser = useNavigate();

    const handleGoBack =() =>{
        backUser(-1)
    }
    return (
        <div>
            
            <h1>{id} .{name}</h1>
            <h3>{email}</h3>
            <h4>{website}</h4>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;