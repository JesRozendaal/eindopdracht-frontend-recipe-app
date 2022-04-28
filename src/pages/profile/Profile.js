import React, {useContext, useState} from 'react';
import './Profile.css';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Header from "../../components/header/Header";
import Recipe1 from "../../components/recipes/Recipe1";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import axios from "axios";

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    async function handleSubmit(e) {
        const token = localStorage.getItem('token');
        e.preventDefault();
        try {
            await axios.put('https://frontend-educational-backend.herokuapp.com/api/user',
                {"password": {password},
                      "repeatedPassword": {repeatedPassword},
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            console.log("The change was successful!");
        } catch (e) {
            console.error(e);
        }
    }

    async function handleEmailChange(e) {
        const token = localStorage.getItem('token');
        e.preventDefault();
        try {
             await axios.put('https://frontend-educational-backend.herokuapp.com/api/user',
                {"email" : {email},
                       headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            console.log("The change was successful!");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Header
                className="header-profile"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>My favorite recipes</h2>

                        {/*<Recipe1*/}
                        {/*    nrOffRecipes="4"*/}
                        {/*    offset="0"*/}
                        {/*/>*/}

                        <h2>My details</h2>

                        <div className="container-user-details">
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Password:</strong> That's a secret only you know 🤫</p>
                            <form onSubmit={handleSubmit}>
                                <strong>
                                    New Password
                                </strong>
                                <label htmlFor="change-password">
                                    <input
                                        type="text"
                                        id="change-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </label>
                                <strong>
                                    Repeat new password
                                </strong>
                                <label htmlFor="repeat-password">
                                    <input
                                        type="password"
                                        id="repeat-password"
                                        onChange={(e) => setRepeatedPassword(e.target.value)}
                                        value={repeatedPassword}
                                    />
                                </label>
                                <button
                                type="submit"
                                >
                                    Save
                                </button>
                            </form>
                            <p><strong>E-mail address:</strong> {user.email}</p>
                            <form onSubmit={handleEmailChange}>
                                <strong>
                                    New e-mail-address
                                </strong>
                                <label htmlFor="change-email">
                                    <input
                                        type="email"
                                        id="change-email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </label>
                                <button
                                type="submit"
                                >
                                    Save
                                </button>
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

export default Profile;