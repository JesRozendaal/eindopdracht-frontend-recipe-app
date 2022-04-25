import React from 'react';
import './Recipe.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Recipe1 from "../../components/recipes/Recipe1";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const Recipe = () => {
    return (
        <>
            <Header
                title="Recipes"
                className="header-recipe"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>All our recipes</h2>
                        <p>Search through all our recipes and find your favorite one.</p>
                        <p>Do you like to save your favorite recipe? Just <Link to="/login-register">log in or register</Link></p>

                        <Recipe1
                            nrOffRecipes="10"
                        />

                        <button type="button">
                            <strong>
                                Previous
                            </strong>
                        </button>
                        <button type="button">
                            <strong>
                                Next
                            </strong>
                        </button>
                        <Link to="/" className="link-back-home"><strong>Back</strong> <img src={Home} alt="home icon" width="25px"/></Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Recipe;