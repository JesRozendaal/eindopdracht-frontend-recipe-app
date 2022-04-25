import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Recipe3.css';

// https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2

const Recipe3 = () => {
    const[recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?intolerances=peanut&maxReadyTime=10&type=main course&number=10&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(result.data);
                setRecipe(result.data);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[]);

    return (

        <>
            <h2>Your recipes</h2>
            {recipe &&
            recipe.results.map((recipes) => {
                    return(
                        <div className="container-recipe3">
                            <img src={recipes.image} alt="recipe" className="image-recipe3"/>
                            <h3><Link to={`/recipes/${recipes.id}`} className="link-recipe">{recipes.title}</Link></h3>
                        </div>
                )})
            }
        </>
    );
};

export default Recipe3;