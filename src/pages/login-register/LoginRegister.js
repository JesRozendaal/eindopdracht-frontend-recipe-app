import React from 'react';
import './LoginRegister.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const LoginRegister = () => {
    return (
        <div>
            <Header
                title="Save your favorite recipes"
                className="header-login-register"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <p>Save your favorite recipes and always have them on hand.</p>
                        <p>Log in or register here!</p>

                        <div className="container-forms">
                            <form className="login-register-form">
                                <h4>Log in</h4>
                                <label htmlFor="signin-username">
                                    <strong>Username</strong>
                                    <input
                                        type="text"
                                        id="signin-username"
                                    />
                                </label>
                                <label htmlFor="signin-password">
                                    <strong>Password</strong>
                                    <input
                                        type="password"
                                        id="signin-password"
                                    />
                                </label>
                                <button>
                                    <strong>Inloggen</strong>
                                </button>
                            </form>

                            <form className="login-register-form">
                                <h4>Register</h4>
                                <label htmlFor="register-username">
                                    <strong>Username</strong>
                                    <input
                                        type="text"
                                        id="register-username"
                                    />
                                </label>
                                <label htmlFor="register-email">
                                    <strong>E-mail address</strong>
                                    <input
                                        type="email"
                                        id="register-email"
                                    />
                                </label>
                                <label htmlFor="register-password">
                                    <strong>Password</strong>
                                    <input
                                        type="password"
                                        id="register-password"
                                    />
                                </label>
                                <button>
                                    <strong>Register</strong>
                                </button>
                            </form>
                        </div>

                        <Link to="/" className="link-back-home"><strong>Back</strong><img src={Home} alt="home icon" width="25px"/></Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginRegister;