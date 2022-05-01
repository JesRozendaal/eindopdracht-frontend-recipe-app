import React, {useContext, useState} from 'react';
import './Profile.css';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Button from "../../components/buttons/Button";
import Header from "../../components/header/Header";
import Recipe1 from "../../components/recipes/Recipe1";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [changePassword, toggleChangePassword] =useState(false);
    const [changeEmail, toggleChangeEmail] =useState(false);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {user} = useContext(AuthContext);

    async function handleSubmit(e) {
        const token = localStorage.getItem('token');
        e.preventDefault();
        toggleChangePassword(false);
        toggleError(false);
        toggleLoading(true);
        try {
            await axios.put('https://frontend-educational-backend.herokuapp.com/api/user',
                {
                    "password": password,
                    "repeatedPassword": repeatedPassword,
                }, {headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            toggleChangePassword(true);
            setPassword('');
            setRepeatedPassword('');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    async function handleEmailChange(e) {
        const token = localStorage.getItem('token');
        e.preventDefault();
        toggleChangeEmail(false);
        toggleError(false);
        try {
             await axios.put('https://frontend-educational-backend.herokuapp.com/api/user',
                 {
                     "email": email,
                 }, {headers: {
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`,
                     },
                 })
            toggleChangeEmail(true);
             setEmail('');
        } catch (e) {
            console.error(e);
            toggleError(true);
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
                        {loading &&
                        <h2>Loading...</h2>
                        }
                        <Recipe1
                            nrOffRecipes="4"
                            offset="0"
                        />

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
                                        placeholder="Use a minimum of 6 characters"
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
                                <Button
                                    typ="submit"
                                    name="Save"
                                />

                                {error &&
                                <h4>Nothing changed, please try again....</h4>
                                }
                                {changePassword &&
                                <h4>The change was successful!</h4>
                                }
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
                                <Button
                                    type="submit"
                                    name="Save"
                                />

                                {error &&
                                <h4>Nothing changed, please try again....</h4>
                                }

                                {changeEmail &&
                                <h4>The change was successful!</h4>
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

export default Profile;