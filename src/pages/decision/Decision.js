import React from 'react';
import './Decision.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import Recipe3 from "../../components/recipes/Recipe3";
import SadSmiley from "../../assets/icons/sad_mood_icon_211218.png";
import LessSadSmiley from "../../assets/icons/confuzed_mood_icon_211412.png";
import NeutralSmiley from "../../assets/icons/empty_mood_icon_211384.png";
import SmileSmiley from "../../assets/icons/smile_mood_icon_211284.png";
import HappySmiley from "../../assets/icons/happy_mood_icon_211409.png";

const Decision = () => {
    return (
        <>
            <Header
            title="Decision maker"
            className="header-decision-maker"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>Don't know what to cook tonight?</h2>
                        <p>Answer the questions and you will receive recipes fitting your needs.</p>
                        <p>If you like to save your favorite recipes, just <Link to="/login-register">log in or register</Link></p>

                        <form className="form-decision-maker">
                            <h4>What is your mood today?</h4>
                            <img src={SadSmiley} alt="sad smiley" width="40px"/>
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>

                            <label htmlFor="nr-off-persons">
                                <h4>How many people are you cooking for?</h4>
                                <input type="number" id="nr-off-persons"/>
                            </label>
                            <h4>How motivated are you to cook?</h4>
                            <img src={SadSmiley} alt="sad smiley" width="40px"/>
                            <img src={LessSadSmiley} alt="less sad smiley" width="40px"/>
                            <img src={NeutralSmiley} alt="neutral smiley" width="40px"/>
                            <img src={SmileSmiley} alt="smiling smiley" width="40px"/>
                            <img src={HappySmiley} alt="happy smiley" width="40px"/>

                            <h4>Does anyone have allergies?</h4>
                            <label htmlFor="no-allergies-radio">
                                <input
                                    type="radio"
                                    id="no-allergies-radio"
                                    name="allergy-choice"
                                />
                                No
                            </label>
                            <label htmlFor="yes-allergies-radio">
                                <input
                                    type="radio"
                                    id="yes-allergies-radio"
                                    name="allergy-choice"
                                />
                                Yes, for:
                            </label>
                            <select multiple="multiple">
                                <option>
                                    Dairy
                                </option>
                                <option>
                                    Egg
                                </option>
                                <option>
                                    Gluten
                                </option>
                                <option>
                                    Grain
                                </option>
                                <option>
                                    Peanut
                                </option>
                                <option>
                                    Seafood
                                </option>
                                <option>
                                    Sesame
                                </option>
                                <option>
                                    Shellfish
                                </option>
                                <option>
                                    Soy
                                </option>
                                <option>
                                    Sulfite
                                </option>
                                <option>
                                    Tree nut
                                </option>
                                <option>
                                    Wheat
                                </option>
                            </select>
                            <p>For more than one allergy, please press Ctrl + click on the items.</p>
                            <button type="button">Search</button>
                        </form>

                        {/*<Recipe3/>*/}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Decision;