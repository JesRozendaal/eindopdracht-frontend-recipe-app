import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './Subrecipe.css';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import Error from "../../assets/photos/mistake-ge1eac774b_1920.jpg";

const Subrecipe = () => {
    const [fullRecipe, setFullRecipe] = useState(null);
    const {recipeId} = useParams();
    const [error, toggleError] = useState(false);
    const {auth} =useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(()=>{
        async function getData() {
            toggleError(false);
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`,
                    {cancelToken: source.token,});
                setFullRecipe(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        } getData();
        return function cleanup() {
            source.cancel();
        }
    },[]);

    return (
        <>
            <Navbar/>
            <main>
                {error &&
                <div className="outer-container">
                    <div className="inner-container">
                        <img src={Error} alt="error" width="400px" className="image-subrecipe"/>
                        <h2 className="error">Oops... Something went wrong</h2>
                    </div>
                </div>
                }
            {fullRecipe &&
            <div className="outer-container">
                <div className="inner-container">
                    <img src={fullRecipe.image} alt="dish" className="image-subrecipe"/>
                    <div className="text-recipes">
                        <p><img src={Clock} alt="clock" className="icons"/> {fullRecipe.readyInMinutes} min</p>
                        <p><img src={Person} alt="person" className="icons"/> {fullRecipe.servings} persons</p>
                        {fullRecipe.diets.map((diet) => {
                            return(
                                <p key={diet}>
                                    {diet}
                                </p>
                            )
                        })}
                    </div>
                    <h2 className="title-pages">{fullRecipe.title}</h2>

                    <div className="container-instructions">
                        <div className="container-preparation">
                        <h3 className="title-subrecipe">Preparation</h3>
                    {fullRecipe.analyzedInstructions[0].steps.map((description) => {
                    return(
                        <section key={description.number}>
                            <article>
                                <h4>Step {description.number}</h4>
                                <p>{description.step}</p>
                            </article>
                        </section>
                    )})}
                        </div>
                        <div className="container-ingredients">
                            <h3 className="title-subrecipe">Ingredients</h3>
                            {fullRecipe.extendedIngredients.map((ingredients) => {
                                return(
                                    <ul key={ingredients.original} className="list-ingredients">
                                        <li>
                                            <p>💚 {ingredients.original}</p>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>

                    {auth &&
                    <div className="container-button">
                        <button className="button-subrecipe">
                            Love this, let's save it!
                        </button>
                    </div>
                    }

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
            }
            </main>

        </>
    );
};

export default Subrecipe;