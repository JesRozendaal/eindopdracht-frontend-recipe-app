import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './Subrecipe.css';
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";

const Subrecipe = () => {
    const [fullRecipe, setFullRecipe] = useState(null);
    const {recipeId} = useParams();

    useEffect(()=>{
        async function getData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(result.data);
                setFullRecipe(result.data);
                // console.log(result.data.analyzedInstructions[0].steps[0].equipment[0].name)
            } catch (e) {
                console.error(e);
            }
        } getData();
    },[recipeId]);

    return (
        <>
            <Navbar/>
            <main>
            {fullRecipe &&
            <div className="outer-container">
                <div className="inner-container">
                    <img src={fullRecipe.image} alt="dish" className="image-subrecipe"/>
                    <h2>{fullRecipe.title}</h2>
                    <div className="text-recipes">
                        <p><img src={Clock} alt="clock" className="icons"/> {fullRecipe.readyInMinutes} min</p>
                        <p><img src={Person} alt="person" className="icons"/> {fullRecipe.servings} persons</p>
                        {fullRecipe.diets.map((diet) => {
                            return(
                                <p>{diet}</p>
                            )
                        })}
                    </div>

                    <div className="container-instructions">
                        <div className="container-preparation">
                        <h3>Preparation</h3>
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
                        <div className="container-ingredients-equipment">
                            <h3>Ingredients</h3>
                            {fullRecipe.extendedIngredients.map((ingredients) => {
                                return(
                                    <ul key={ingredients.id} className="list-ingredients">
                                        <li>
                                            {/*<img src={ingredients.image} alt="ingredient"/>*/}
                                            <p>{ingredients.original}</p>
                                            {/*{ingredients.name}*/}
                                        </li>
                                    </ul>
                                )
                            })}
                            {/*<h3>Equipment</h3>*/}
                            {/*{fullRecipe.analyzedInstructions[0].steps.map((equipment) =>{*/}
                            {/*    return(*/}
                            {/*        <ul key={equipment.equipment[0].name}>*/}
                            {/*            <li>*/}
                            {/*                <p>{equipment.equipment[0].name}</p>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    )*/}
                            {/*})}*/}

                            {/*console.log(result.data.analyzedInstructions[0].steps[0].equipment[0].name)*/}
                        </div>
                    </div>
                    <Link to="/" className="link-back-home"><strong>Back</strong> <img src={Home} alt="home icon" width="25px"/></Link>
                </div>
            </div>
            }
            </main>

        </>
    );
};

export default Subrecipe;