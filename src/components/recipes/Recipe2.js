import React, {useEffect, useState} from 'react';
import './Recipe2.css';
import axios from "axios";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png"

//https://api.spoonacular.com/recipes/324694/analyzedInstructions
//https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

const Recipe2 = () => {
    const [fullRecipe, setFullRecipe] = useState(null);

    useEffect(()=>{
        async function getData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/324694/analyzedInstructions&apiKey=${process.env.REACT_APP_API_KEY}`);
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
                Test
                </>
    );
};

export default Recipe2;