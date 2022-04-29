import React, {useContext, useState} from 'react';
import './LoginRegister.css';
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Header from "../../components/header/Header";
import TextAllPages from "../../components/text/TextAllPages";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const LoginRegister = () => {
    const {login} = useContext(AuthContext);
    const [userNameLogin, setUserNameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [userNameRegister, setUserNameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [registered, toggleRegistered] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": userNameLogin,
                    "password" : passwordLogin,
                })
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        toggleRegistered(false);
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
            {
                "username": userNameRegister,
                "email": emailRegister,
                "password": passwordRegister,
                "role": ["user"],
            });
            toggleRegistered(true);
        } catch (e) {
            console.error(e);
        }
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
                            <form
                                onSubmit={handleSubmit}
                                className="login-register-form"
                            >
                                <h4 className="title-login-register">Log in</h4>
                                <strong>
                                    Username
                                </strong>
                                    <label htmlFor="signin-username">
                                        <input
                                            type="text"
                                            id="signin-username"
                                            onChange={(e) => setUserNameLogin(e.target.value)}
                                            value={userNameLogin}
                                    />
                                </label>
                                <strong>
                                    Password
                                </strong>
                                <label htmlFor="signin-password">
                                    <input
                                        type="password"
                                        id="signin-password"
                                        onChange={(e) => setPasswordLogin(e.target.value)}
                                        value={passwordLogin}
                                    />
                                </label>

                                <button
                                type="submit"
                                >
                                    Log in
                                </button>
                            </form>

                            <form
                                onSubmit={handleRegister}
                                className="login-register-form"
                            >
                                <h4 className="title-login-register">Register</h4>
                                <strong>
                                    Username
                                </strong>
                                <label htmlFor="register-username">
                                    <input
                                        type="text"
                                        id="register-username"
                                        onChange={(e) => setUserNameRegister(e.target.value)}
                                        value={userNameRegister}
                                    />
                                </label>
                                <strong>
                                    E-mail address
                                </strong>
                                <label htmlFor="register-email">
                                    <input
                                        type="email"
                                        id="register-email"
                                        onChange={(e) => setEmailRegister(e.target.value)}
                                        value={emailRegister}
                                    />
                                </label>
                                <strong>
                                    Password
                                </strong>
                                <label htmlFor="register-password">
                                    <input
                                        type="password"
                                        id="register-password"
                                        onChange={(e) => setPasswordRegister(e.target.value)}
                                        value={passwordRegister}
                                        placeholder="Use a minimum of 6 characters"
                                    />
                                </label>
                                <button
                                type="submit"
                                >
                                    Register
                                </button>
                                <p className="warning">After you register you have to log in!</p>
                                {registered&&
                                <h4>You are registered!</h4>
                                }
                            </form>
                        </div>
                        <div className="home-container">
                            <Link
                                to="/"
                                className="link-back-home"
                            >
                                <strong>
                                    Back
                                </strong>
                                <img src={Home} alt="home icon" width="25px"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginRegister;