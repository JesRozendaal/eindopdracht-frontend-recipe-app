import React, {useEffect, useState} from 'react';
import './Recipe1.css';
import axios from "axios";
import {Link} from "react-router-dom";
import RecipeTimePersons from "./RecipeTimePersons";

const Recipe1 = ({nrOffRecipes, offset}) => {
    const[recipeCard, setRecipeCard] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=${nrOffRecipes}&offset=${offset}&type=main course&apiKey=${process.env.REACT_APP_API_KEY}`,
                    {cancelToken: source.token,});
                setRecipeCard(result.data);
            }catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
        fetchData();
        return function cleanup() {
            source.cancel();
        }
    },[]);

    return (

        <div className="container-recipes">
            {error &&
            <h2 className="error">Oops... Something went wrong</h2>
            }
            {loading &&
            <h2>Loading....</h2>
            }
            {recipeCard&&
            recipeCard.results.map((posts) => {
                return (
                    <section key={posts.id}>
                        <article  className="recipe-box">
                            <img src={posts.image} alt="recipe"  width="500px" height="250px" className="image-recipes"/>
                            <span className="container-text">
                                <h3><Link to={`/recipes/${posts.id}`} className="link-recipe">{posts.title}</Link></h3>
                                <div className="text-recipes">
                                    <RecipeTimePersons
                                        id={posts.id}
                                    />
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