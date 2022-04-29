import React, {useEffect, useState} from 'react';
import './Decision.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import axios from "axios";
import RecipeTimePersons from "../../components/recipes/RecipeTimePersons";
import TextAllPages from "../../components/text/TextAllPages";
import Button from "../../components/buttons/Button";
import SadSmiley from "../../assets/icons/sad_mood_icon_211218.png";
import LessSadSmiley from "../../assets/icons/confuzed_mood_icon_211412.png";
import NeutralSmiley from "../../assets/icons/empty_mood_icon_211384.png";
import SmileSmiley from "../../assets/icons/smile_mood_icon_211284.png";
import HappySmiley from "../../assets/icons/happy_mood_icon_211409.png";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import Error from "../../assets/photos/mistake-ge1eac774b_1920.jpg";

const Decision = () => {
    const [error, toggleError] = useState(false);
    const [recipe, setRecipe] = useState();
    const [mood, setMood] = useState(0);
    const [cuisine, setCuisine] = useState(0);
    const [motivation, setMotivation] = useState('');
    const [allergies, setAllergies] = useState('');
    const [loading, toggleLoading] = useState(false);
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        toggleError(false);
        toggleLoading(true);
        e.preventDefault();
        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&maxReadyTime=${motivation}&maxCalories=${mood}&intolerances=${allergies}number=15&apiKey=${process.env.REACT_APP_API_KEY}`,
                {
                    cancelToken: source.token,
                })
            setRecipe(result.data);
        } catch(e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    function handleSelectAllergies(e) {
        setAllergies(e.target.value);
    }

    function handleSelectCuisine(e) {
        setCuisine(e.target.value);
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
                            <label htmlFor="sad-mood-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="sad-mood-smiley"
                                    value="800"
                                    name="mood"
                                    onChange={(e) => setMood(e.target.value)}
                                />
                                <img src={SadSmiley} alt="sad smiley" width="40px"/>
                            </label>
                            <label htmlFor="less-sad-mood-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="less-sad-mood-smiley"
                                    value="600"
                                    name="mood"
                                    onChange={(e) => setMood(e.target.value)}
                                />
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            </label>
                            <label htmlFor="neutral-mood-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="neutral-mood-smiley"
                                    value="400"
                                    name="mood"
                                    onChange={(e) => setMood(e.target.value)}
                                />
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            </label>
                            <label htmlFor="happy-mood-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="happy-mood-smiley"
                                    value="200"
                                    name="mood"
                                    onChange={(e) => setMood(e.target.value)}
                                />
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            </label>
                            <label htmlFor="great-mood-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="great-mood-smiley"
                                    value="50"
                                    name="mood"
                                    onChange={(e) => setMood(e.target.value)}
                                />
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>
                            </label>

                            <label htmlFor="nr-off-persons">
                                <h4>What does your company like to eat?</h4>
                                <select
                                    defaultValue={allergies}
                                    onChange={handleSelectCuisine}
                                >
                                    <option value="">
                                        Everything
                                    </option>
                                    <option  value="american">
                                        American
                                    </option>
                                    <option value="british">
                                        British
                                    </option>
                                    <option value="chinese">
                                        Chinese
                                    </option>
                                    <option value="european">
                                        European
                                    </option>
                                    <option value="greek">
                                        Greek
                                    </option>
                                    <option value="italian">
                                        Italian
                                    </option>
                                    <option value="mexican">
                                        Mexican
                                    </option>
                                    <option value="middle eastern">
                                        Middle Eastern
                                    </option>
                                    <option value="southern">
                                        Southern
                                    </option>
                                    <option value="thai">
                                        Thai
                                    </option>
                                    <option value="vietnamese">
                                        Vietnamese
                                    </option>
                                </select>
                            </label>

                            <h4>How motivated are you to cook?</h4>
                            <label htmlFor="no-motivation-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="no-motivation-smiley"
                                    value="20"
                                    name="motivation"
                                    onChange={(e) => setMotivation(e.target.value)}
                                />
                            <img src={SadSmiley} alt="sad smiley" width="40px"/>
                            </label>
                            <label htmlFor="little-motivation-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="little-motivation-smiley"
                                    value="30"
                                    name="motivation"
                                    onChange={(e) => setMotivation(e.target.value)}
                                />
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            </label>
                            <label htmlFor="neutral-motivation-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="neutral-motivation-smiley"
                                    value="45"
                                    name="motivation"
                                    onChange={(e) => setMotivation(e.target.value)}
                                />
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            </label>
                            <label htmlFor="good-motivation-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="good-motivation-smiley"
                                    value="70"
                                    name="motivation"
                                    onChange={(e) => setMotivation(e.target.value)}
                                />
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            </label>
                            <label htmlFor="great-motivation-smiley">
                                <input
                                    className="radio"
                                    type="radio"
                                    id="great-motivation-smiley"
                                    value="150"
                                    name="motivation"
                                    onChange={(e) => setMotivation(e.target.value)}
                                />
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>
                            </label>

                            <h4>Does anyone have allergies?</h4>
                            <select
                                defaultValue={allergies}
                                onChange={handleSelectAllergies}
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
                            <div className="container-button-decision">
                                <Button
                                    type="submit"
                                    name="Search"
                                />
                            </div>

                        </form>

                        {error &&
                        <>
                            <img src={Error} alt="error" width="400px" className="image-subrecipe"/>
                            <h2 className="error">Oops... Something went wrong</h2>
                        </>
                        }

                        {loading &&
                        <h2>Loading....</h2>
                        }

                        {recipe &&
                        <>
                            <h2>Your recipes</h2>
                            {recipe.results.map((recipes) => {
                                return (
                                    <div className="container-recipe-decision" key={recipes.id}>
                                        <img src={recipes.image} alt="recipe" className="image-recipe-decision"/>
                                        <section className="text-decision">
                                            <article>
                                                <h3 className="title-decision-recipe"><Link to={`/recipes/${recipes.id}`} className="link-recipe">{recipes.title}</Link></h3>
                                                <div className="text-recipes">
                                                    <RecipeTimePersons
                                                        id={recipes.id}
                                                    />
                                                </div>
                                            </article>
                                        </section>
                                    </div>
                                )})}
                        </> }

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