import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header row">
            <div className="header-title col-md-6">
                <h2>Gadget Colony</h2>
            </div>
            <div className="header-nav col-md-6 text-center">
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/login'><Button variant='primary'>Log In</Button></Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;