import React, {useContext} from 'react';
import './LoginRegister.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import TextAllPages from "../../components/text/TextAllPages";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import {AuthContext} from "../../context/AuthContext";

const LoginRegister = () => {
    const {login} = useContext(AuthContext);

    function handleSubmit() {
        login();
    }

    return (
        <div>
            <Header
                title="Save your favorite recipes"
                className="header-login-register"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <TextAllPages>
                            <p>Save your favorite recipes and always have them on hand.</p>
                            <p>Log in or register here!</p>
                        </TextAllPages>

                        <div className="container-forms">
                            <form onSubmit={handleSubmit} className="login-register-form">
                                <h4 className="title-login-register">Log in</h4>
                                <label htmlFor="signin-username">
                                    <strong>
                                        Username
                                    </strong>
                                    <input
                                        type="text"
                                        id="signin-username"
                                    />
                                </label>
                                <label htmlFor="signin-password">
                                    <strong>
                                        Password
                                    </strong>
                                    <input
                                        type="password"
                                        id="signin-password"
                                    />
                                </label>
                                <button
                                type="submit"
                                >
                                    Log in
                                </button>
                            </form>

                            <form className="login-register-form">
                                <h4 className="title-login-register">Register</h4>
                                <label htmlFor="register-username">
                                    <strong>
                                        Username
                                    </strong>
                                    <input
                                        type="text"
                                        id="register-username"
                                    />
                                </label>
                                <label htmlFor="register-email">
                                    <strong>
                                        E-mail address
                                    </strong>
                                    <input
                                        type="email"
                                        id="register-email"
                                    />
                                </label>
                                <label htmlFor="register-password">
                                    <strong>
                                        Password
                                    </strong>
                                    <input
                                        type="password"
                                        id="register-password"
                                    />
                                </label>
                                <button>
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="home-container">
                            <Link to="/" className="link-back-home"><strong>Back</strong><img src={Home} alt="home icon" width="25px"/></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginRegister;