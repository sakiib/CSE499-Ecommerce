import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: '#61DBFB'};
    } else {
        return {color: '#ffff'};
    }
};

const Menu = ({ history }) => (
    <div> 
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item mr-auto">
                <Link className="nav-link" style={isActive(history, '/')} to="/"> Home </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/dashboard')} to="/dashboard"> Dashboard </Link>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin"> Signin </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup"> Signup </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span className="nav-link" style={{cursor: 'pointer', color: '#ffff'}} 
                        onClick={() => signout(() => { history.push("/"); }) } > Signout 
                    </span>
                </li>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);