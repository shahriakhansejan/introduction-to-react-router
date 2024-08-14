import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contract">Contract</NavLink>
                <NavLink to="/user/:userId">My Website</NavLink>

                
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;