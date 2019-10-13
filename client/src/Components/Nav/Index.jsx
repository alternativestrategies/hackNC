import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Home/Index';
import Products from '../Products/Index';
import Profile from '../Profile/Index';
import Login from '../Login';
import Signup from '../Signup';

const Nav = () => {
    return (
        //To use react-router-dom you have to wrap the code for the links in <BrowserRouter>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <NavLink exact className="btn text-white" to="/">
                    <span className="navbar-brand mb-1 h1 nav-title">Stars</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right ml-auto">
                        <li className="nav-item">
                            {/* Using <NavLink> to be able to target active for a more user friendly active page different color button */}
                            <NavLink exact className="btn text-white" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="btn text-white" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="btn text-white" to="/profile">
                                Profile
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="btn text-white" to="/Login">
                                Login
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* This is where the routing paths are determined */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    );
};

export default Nav;