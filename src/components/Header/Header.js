import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <div className="header row">
            <div className="header-title col-md-6 col-sm-12">
                <h2>Gadget Colony</h2>
            </div>
            <div className="header-nav col-md-6 col-sm-12">
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/login'><Button variant='primary'>{loggedInUser?`${loggedInUser.name}`:'Log In'}</Button></Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;