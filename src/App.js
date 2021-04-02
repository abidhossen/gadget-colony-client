import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import CheckOut from './components/CheckOut/CheckOut';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <Router>
      
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
          <Admin>
          </Admin>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
