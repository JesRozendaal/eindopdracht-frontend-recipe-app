import React, {useEffect, useState} from 'react';
import './Subrecipe.css';
import Header from "../../components/header/Header";
import axios from "axios";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png"

//https://api.spoonacular.com/recipes/324694/analyzedInstructions
//https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

const Subrecipe = () => {
    const [fullRecipe, setFullRecipe] = useState(null);

    useEffect(()=>{
        async function getData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/632279/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(result.data);
                setFullRecipe(result.data);
                // console.log(result.data.analyzedInstructions[0].steps[1].step)
            } catch (e) {
                console.error(e);
            }
        } getData();
    },[])

    return (
        <>
            <Header
            className="header-subrecipe"
            />
            {fullRecipe &&
            <div className="outer-container">
                <div className="inner-container">
                    <img src={fullRecipe.image} alt="dish"/>
                    <p><img src={Clock} alt="clock" className="icons"/> {fullRecipe.readyInMinutes} min</p>
                    <p><img src={Person} alt="person" className="icons"/> {fullRecipe.servings} persons</p>
                    {/*nog een if statement maken voor person/persons!*/}

                    <div className="container-instructions">
                        <h3>Preparation</h3>

                        <div className="container-ingredients-equipment">
                            <h3>Ingredients</h3>

                            <h3>Equipment</h3>
                        </div>
                    </div>
                </div>
            </div>
            }

        </>
    );
};

export default Subrecipe;