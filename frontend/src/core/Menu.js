import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: '#61DBFB'};
    } else {
        //return {color: '#ffff'};
        return {color: '#000000'};
    }
};

const Menu = ({ history }) => (
    <div> 
        <ul className="nav nav-tabs bg-light mt-auto fixed-top">
            <li className="nav-item mr-auto">
                <Link className="nav-link font-weight-bold" style={isActive(history, '/')} to="/"> HOME </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link font-weight-bold" style={isActive(history, '/shop')} to="/shop"> SHOP </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className="nav-link font-weight-bold" style={isActive(history, '/user/dashboard')} to="/user/dashboard"> DASHBOARD </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link font-weight-bold" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard"> DASHBOARD </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" style={isActive(history, '/signin')} to="/signin"> SIGNIN </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" style={isActive(history, '/signup')} to="/signup"> SIGNUP </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span className="nav-link" style={{cursor: 'pointer', color: '#000000'}} 
                        onClick={() => signout(() => { history.push("/"); }) } > SIGNOUT 
                    </span>
                </li>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);