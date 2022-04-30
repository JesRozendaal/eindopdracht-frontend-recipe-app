import React, {useState} from 'react';
import './Recipe.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Recipe1 from "../../components/recipes/Recipe1";
import TextAllPages from "../../components/text/TextAllPages";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import Button from "../../components/buttons/Button";

const Recipe = () => {
    const [offset, setOffset] = useState(0);

    return (
        <>
            <Header
                title="Recipes"
                className="header-recipe"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <TextAllPages
                        title="All our recipes"
                        >
                            <p>Search through all our recipes and find your favorite one.</p>
                            <p>Do you like to save your favorite recipe? Just <Link to="/login-register">log in or register</Link></p>
                        </TextAllPages>

                        <Recipe1
                            nrOffRecipes="10"
                            offset={offset}
                        />
                        <div className="buttons-box">
                            <Button
                                type="button"
                                name="Previous"
                                onClick={() => setOffset(offset -10)}
                                disabled={offset === 0}
                            />
                            <Button
                                type="button"
                                name="Next"
                                onClick={() => setOffset(offset +10)}
                            />
                        </div>

                        <div className="home-container">
                            <Link to="/" className="link-back-home"><strong>Back</strong> <img src={Home} alt="home icon" width="25px"/></Link>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Recipe;