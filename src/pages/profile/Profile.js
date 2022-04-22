import React from 'react';
import './Profile.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Recipe1 from "../../components/recipes/Recipe1";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const Profile = () => {
    return (
        <div>
            <Header
                className="header-profile"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>My favorite recipes</h2>

                        <Recipe1
                            nrOffRecipes="4"
                        />

                        <h2>My details</h2>

                        <div className="container-user-details">
                            <p>Username: CarrotLover 1</p>
                            <button type="button">Change</button>
                            <p>Password: ****</p>
                            <button type="button">Change</button>
                            <p>E-mail address: CarrotLover1@design.com</p>
                            <button type="button">Change</button>
                        </div>

                        <Link to="/" className="link-back-home"><strong>Back</strong><img src={Home} alt="home icon" width="25px"/></Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;