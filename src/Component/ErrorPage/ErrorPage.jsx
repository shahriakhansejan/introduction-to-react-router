import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div>
                    <h3>Page not Found</h3>
                    <p>For go back click the button</p>
                    <Link to="/"><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;