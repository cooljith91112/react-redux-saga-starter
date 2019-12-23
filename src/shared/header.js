import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const onLogout = (event) => {

    }

    return (
        <nav className="navbar navbar-dark top-header flex-md-nowrap p-0 shadow">
            <Link
                className="navbar-brand col-sm-3 col-md-2 mr-0"
                to={{pathname: "/dashboard",}}>
                    <img src="assets/images/small_logo.png" />
            </Link>

            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a href="#!" onClick={onLogout} className="btn btn-link">Sign out</a>

                </li>
            </ul>
        </nav>
    );
};

export default Header;