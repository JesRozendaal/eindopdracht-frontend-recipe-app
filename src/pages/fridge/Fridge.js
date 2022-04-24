import React from 'react';
import './Fridge.css';
import Header from "../../components/header/Header";
import Recipe2 from "../../components/recipes/Recipe2";
import {Link} from "react-router-dom";

const Fridge = () => {

    return (
        <div>
            <Header
                title="What's in your fridge?"
                className="header-fridge"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>Stop wasting food!</h2>
                        <p>Just type the food left in your fridge in the bar below and receive recipes for a delicious meal.</p>
                        <p>If you like to save your favorite recipes, just <Link to="/login-register">log in or register</Link></p>

                        <form>
                            <label htmlFor="ingredients">
                                <p>What's in your fridge?</p>
                                <input
                                    type="text"
                                    id="ingredients"
                                />
                            </label>
                            <button type="button">
                                Search
                            </button>
                        </form>

                        <Recipe2 />


                    </div>
                </div>
            </main>
        </div>
    );
};

export default Fridge;