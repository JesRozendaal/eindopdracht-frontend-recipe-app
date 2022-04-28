import React, {useState} from 'react';
import './Decision.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import axios from "axios";
import SadSmiley from "../../assets/icons/sad_mood_icon_211218.png";
import LessSadSmiley from "../../assets/icons/confuzed_mood_icon_211412.png";
import NeutralSmiley from "../../assets/icons/empty_mood_icon_211384.png";
import SmileSmiley from "../../assets/icons/smile_mood_icon_211284.png";
import HappySmiley from "../../assets/icons/happy_mood_icon_211409.png";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import RecipeTimePersons from "../../components/recipes/RecipeTimePersons";
import Error from "../../assets/photos/mistake-ge1eac774b_1920.jpg";
import Textblock from "../../components/home/Textblock";
import TextAllPages from "../../components/text/TextAllPages";

//endpoint: https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=20&intolerances="peanut"&number=10&apiKey=${process.env.REACT_APP_API_KEY}

const Decision = () => {
    const [error, toggleError] = useState(false);
    const [recipe, setRecipe] = useState();
    const [mood, setMood] = useState(0);
    const [nrOfPersons, setNrOfPersons] = useState(0);
    const [motivation, setMotivation] = useState('');
    const [allergies, setAllergies] = useState('');

    async function handleSubmit(e) {
        toggleError(false);
        e.preventDefault();
        console.log(allergies, nrOfPersons);
        try {
            await axios.get(`https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=20&minCarbs=600&intolerances=${allergies}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`)
        } catch(e) {
            console.error(e)
            toggleError(true);
        }
    }

    function handleSelect(e) {
        setAllergies(e.target.value);
    }

    return (
        <>
            <Header
            title="Decision maker"
            className="header-decision-maker"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">

                        <TextAllPages
                            title="Don't know what to cook tonight?"
                            >
                        <p>Answer the questions and you will receive recipes fitting your needs.</p>
                        <p>If you like to save your favorite recipes, just <Link to="/login-register">log in or register</Link></p>
                        </TextAllPages>

                        <form className="form-decision-maker" onSubmit={handleSubmit}>
                            <h4>What is your mood today?</h4>
                              <button type="button"
                                      className="button-decision"
                              >
                                <img src={SadSmiley} alt="sad smiley" width="40px"/>
                           </button>
                            <button
                                type="button"
                                className="button-decision"
                            >
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            </button>
                            <button
                                type="button"
                                className="button-decision"
                            >
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            </button>
                            <button
                                type="button"
                                className="button-decision"
                            >
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            </button>
                            <button
                                type="button"
                                className="button-decision"
                            >
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>
                            </button>

                            <label htmlFor="nr-off-persons">
                                <h4>How many people are you cooking for?</h4>
                                <input
                                    type="number"
                                    id="nr-off-persons"
                                    onChange={(e) => setNrOfPersons(e.target.value)}
                                    value={nrOfPersons}
                                />
                            </label>

                            <h4>How motivated are you to cook?</h4>
                            <img src={SadSmiley} alt="sad smiley" width="40px"/>
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>

                            <h4>Does anyone have allergies?</h4>
                            {/*<label htmlFor="no-allergies-radio">*/}
                            {/*    <input*/}
                            {/*        className="radio"*/}
                            {/*        type="radio"*/}
                            {/*        id="no-allergies-radio"*/}
                            {/*        value="no-allergies"*/}
                            {/*        name="allergy-choice"*/}
                            {/*    />*/}
                            {/*    No*/}
                            {/*</label>*/}
                            {/*<label htmlFor="yes-allergies-radio">*/}
                            {/*    <input*/}
                            {/*        className="radio"*/}
                            {/*        type="radio"*/}
                            {/*        id="yes-allergies-radio"*/}
                            {/*        value="allergies"*/}
                            {/*        name="allergy-choice"*/}
                            {/*    />*/}
                            {/*    Yes, for:*/}
                            {/*</label>*/}
                            <select
                                defaultValue={allergies}
                                onChange={handleSelect}
                            >
                                <option value="">
                                    None
                                </option>
                                <option  value="dairy">
                                    Dairy
                                </option>
                                <option value="egg">
                                    Egg
                                </option>
                                <option value="gluten">
                                    Gluten
                                </option>
                                <option value="grain">
                                    Grain
                                </option>
                                <option value="peanut">
                                    Peanut
                                </option>
                                <option value="seafood">
                                    Seafood
                                </option>
                                <option value="sesame">
                                    Sesame
                                </option>
                                <option value="shellfish">
                                    Shellfish
                                </option>
                                <option value="soy">
                                    Soy
                                </option>
                                <option value="sulfite">
                                    Sulfite
                                </option>
                                <option value="tree nut">
                                    Tree nut
                                </option>
                                <option value="wheat">
                                    Wheat
                                </option>
                            </select>
                            <p className="explanation">For more than one allergy, please press Ctrl + click on the items.</p>
                            <button type="submit">
                                Search
                            </button>
                        </form>



                        {error &&
                        <div className="outer-container">
                            <div className="inner-container">
                                <img src={Error} alt="error" width="400px" className="image-subrecipe"/>
                                <h2 className="error">Oops... Something went wrong</h2>
                            </div>
                        </div>
                        }

                        {recipe &&
                        <>
                            <h2>Your recipes</h2>
                            {recipe.data.map((recipes) => {
                                return (
                                    <div className="container-recipe-fridge" key={recipes.id}>
                                        <img src={recipes.image} alt="recipe" className="image-recipe-fridge"/>
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
        </>
    );
};

export default Decision;