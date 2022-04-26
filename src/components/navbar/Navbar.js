import React, {useContext} from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const {auth} =useContext(AuthContext);

    return (
        <div className="outer-nav-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className="nav-link">
                                <strong>
                                    Home
                                </strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/recipes" className="nav-link">
                                <strong>
                                    Recipes
                                </strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/whats-in-your-fridge" className="nav-link">
                                <strong>
                                    What's in your fridge
                                </strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/decision-maker" className="nav-link">
                                <strong>
                                    Decision maker
                                </strong>
                            </NavLink>
                        </li>
                        {!auth ?
                        <li>
                            <NavLink to="/login-register" className="nav-link">
                                <strong>
                                    Login/Register
                                </strong>
                            </NavLink>
                        </li>
                            :
                            <li>
                                <NavLink to="/" className="nav-link">
                                    <strong>
                                        Log out
                                    </strong>
                                </NavLink>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;