import React, {useEffect, useState} from 'react';
import './Recipe1.css';
import axios from "axios";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png";

const Recipe1 = ({nrOffRecipes}) => {
    const[recipeCard, setRecipeCard] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=64b9d798657c4f318e70de4bdedc004b&number=${nrOffRecipes}&type=main course`);
                console.log(result.data);
                setRecipeCard(result.data.recipes);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[nrOffRecipes]);

    return (

        <div className="container-recipes">
            {recipeCard&&
            recipeCard.map((posts) => {
                return (
                    <section key={posts.id}>
                        <article  className="recipe-box">
                            <img src={posts.image} alt="recipe" width="500px" height="250px" className="image-recipes"/>
                            <span className="container-text">
                                            <h3>{posts.title}</h3>
                                            <div className="text-recipes">
                                                <p><img src={Clock} alt="clock" className="icons"/>{posts.readyInMinutes} min</p>
                                                <p><img src={Person} alt="person" className="icons"/>{posts.servings} persons</p>
                                            </div>
                                        </span>
                        </article>
                    </section>

                )
            })
            }
        </div>
    );
};

export default Recipe1;