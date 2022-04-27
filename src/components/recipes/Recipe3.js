import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Recipe3.css';


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
            {recipe.diets.map((diet) => {
                return(
                    <ul>
                        <li>
                            <p>{diet}</p>
                        </li>
                    </ul>
                )})}
        </>
    );
};

export default Recipe3;