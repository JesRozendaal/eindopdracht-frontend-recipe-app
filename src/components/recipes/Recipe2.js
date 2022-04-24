import React, {useEffect, useState} from 'react';
import './Recipe2.css';
import axios from "axios";
import {Link} from "react-router-dom";

// endpoint: https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2

const Recipe2 = () => {
    const[recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=cheese,+salami,+tomatoes,+eggs&number=10&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(result);
                setRecipe(result);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[]);

        return (

            <>
                {recipe &&
                    <>
                <h2>Your recipes</h2>
                    <div className="container-recipe2">
                        <img src={recipe.data[0].image} alt="recipe"/>
                    <h3><Link to={`/recipes/${recipe.data[0].id}`} className="link-recipe">{recipe.data[0].title}</Link>
                    </h3>
                    </div>
                    </>
                }
            </>

    );
};

export default Recipe2;