import React, {useEffect, useState} from 'react';
import './Fridge.css';
import {Link} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import TextAllPages from "../../components/text/TextAllPages";
import RecipeTimePersons from "../../components/recipes/RecipeTimePersons";
import Button from "../../components/buttons/Button";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import Error from "../../assets/photos/mistake-ge1eac774b_1920.jpg";

const Fridge = () => {
    const[ingredients, setIngredients] = useState('');
    const[recipe, setRecipe] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {

        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`,
                {
                    cancelToken: source.token,
                });
            setRecipe(result);
            setIngredients('');
        } catch(e){console.error(e);
            toggleError(true);
            setIngredients('');
        }
        toggleLoading(false);
    }

    return (
        <div>
            <Header
                title="What's in your fridge?"
                className="header-fridge"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">

                        <TextAllPages
                            title="Stop wasting food!"
                        >
                            <p>Just type the food left in your fridge in the bar below and receive recipes for a delicious meal.</p>
                            <p>If you like to save your favorite recipes, just <Link to="/login-register">log in or register</Link></p>
                        </TextAllPages>

                        <form onSubmit={handleSubmit} className="fridge-form">
                            <label htmlFor="ingredients">
                                <strong>What's in your fridge?</strong>
                                <input
                                    type="text"
                                    id="ingredients"
                                    placeholder="type your food here, for example: eggs, salami, cheese"
                                    className="input-field-fridge"
                                    onChange={(e) => setIngredients(e.target.value)}
                                    value={ingredients}
                                />
                            </label>
                            <Button
                            type="submit"
                            name="Search"
                            disabled={!ingredients}
                            />
                        </form>

                        {error &&
                            <>
                                <img src={Error} alt="error" width="400px" className="image-error"/>
                                <h2 className="error">Oops... Something went wrong</h2>
                            </>
                        }

                        {loading &&
                        <h2>Loading....</h2>
                        }

                        {recipe &&
                        <>
                            <h2>Your recipes</h2>
                            {recipe.data.map((recipes) => {
                                return (
                                    <div className="container-recipe-fridge" key={recipes.id}>
                                        <img src={recipes.image} alt="recipe" className="image-recipe-decision-fridge"/>
                                        <section className="text-fridge">
                                            <article>
                                                <h3 className="title-fridge-recipe"><Link to={`/recipes/${recipes.id}`} className="link-recipe">{recipes.title}</Link></h3>
                                                <div className="text-recipes">
                                                    <RecipeTimePersons
                                                        id={recipes.id}
                                                    />
                                                </div>
                                            </article>
                                        </section>
                                    </div>
                                )})}
                        </>}
                        <div className="home-container">
                            <Link to="/" className="link-back-home"><strong>Back</strong> <img src={Home} alt="home icon" width="25px"/></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Fridge;