import React, {useEffect, useState} from 'react';
import './RecipeTimePersons.css';
import axios from "axios";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png";

const RecipeTimePersons = ({id}) => {
    const[recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`);
                setRecipe(result.data);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[id]);

        return (
            <>
                {recipe &&
                    <>
                        <p><img src={Clock} alt="clock" className="icons"/>{recipe.readyInMinutes} min</p>
                        <p><img src={Person} alt="person" className="icons"/>{recipe.servings} persons</p>
                    </>
                }
            </>
    );
};

export default RecipeTimePersons;