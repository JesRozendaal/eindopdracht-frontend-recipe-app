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
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
            {
                "username": userNameRegister,
                "email": emailRegister,
                "password": passwordRegister,
                "role": ["user"],
            });
            console.log("registered with success!");
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
                                <label htmlFor="signin-username">
                                    <strong>
                                        Username
                                    </strong>
                                    <input
                                        type="text"
                                        id="signin-username"
                                        onChange={(e) => setUserNameLogin(e.target.value)}
                                        value={userNameLogin}
                                    />
                                </label>
                                <label htmlFor="signin-password">
                                    <strong>
                                        Password
                                    </strong>
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
                                <label htmlFor="register-username">
                                    <strong>
                                        Username
                                    </strong>
                                    <input
                                        type="text"
                                        id="register-username"
                                        onChange={(e) => setUserNameRegister(e.target.value)}
                                        value={userNameRegister}
                                    />
                                </label>
                                <label htmlFor="register-email">
                                    <strong>
                                        E-mail address
                                    </strong>
                                    <input
                                        type="email"
                                        id="register-email"
                                        onChange={(e) => setEmailRegister(e.target.value)}
                                        value={emailRegister}
                                    />
                                </label>
                                <label htmlFor="register-password">
                                    <strong>
                                        Password
                                    </strong>
                                    <input
                                        type="password"
                                        id="register-password"
                                        onChange={(e) => setPasswordRegister(e.target.value)}
                                        value={passwordRegister}
                                    />
                                </label>
                                <button
                                type="submit"
                                >
                                    Register
                                </button>
                                <p>After you register you have to log in!</p>
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