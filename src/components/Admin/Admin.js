import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../AdminRoute/AdminRoute';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // appBar: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    // },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    // drawerPaper: {
    //     width: drawerWidth,
    // },
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));



const Admin = () => {
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    return (
        <div className={classes.root}>    
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <h2>Gadget Colony</h2>
                <Divider />
                    <ul>
                        <li>
                            <Link to={`${url}/addProduct`}>Add Product</Link>
                        </li>
                        <li>
                            <Link to={`${url}/manageProduct`}>Manage Product</Link>
                        </li>
                        <li>
                            <Link to={`${url}/editProduct`}>Edit Product</Link>
                        </li>
                    </ul>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div  />
                <Switch>
                    <Route path={`${path}/:navId`}>
                        <AdminRoute></AdminRoute>
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default Admin;