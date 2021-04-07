import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTasks, faEdit } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../AdminRoute/AdminRoute';
import Header from '../Header/Header';


const Admin = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div class="sidebar">
                <Link to='/home' className="sidebar-header">Gadget Colony</Link>
                <Link to={`${url}/addProduct`}> <FontAwesomeIcon icon={faPlus} /> Add Product</Link>
                <Link to={`${url}/manageProduct`}><FontAwesomeIcon icon={faTasks} /> Manage Product</Link>
                <Link to={`${url}/editProduct`}><FontAwesomeIcon icon={faEdit} /> Edit Product</Link>
            </div>
            <div class="content">
                <Switch>
                    <Route path={`${path}/:navId`}>
                        <AdminRoute></AdminRoute>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Admin;