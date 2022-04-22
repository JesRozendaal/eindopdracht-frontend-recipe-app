import React from 'react';
import './Subrecipe.css';
import Recipe2 from "../../components/recipes/Recipe2";
import Header from "../../components/header/Header";

const Subrecipe = () => {
    return (
        <div>
            <Header
            className="header-subrecipe"
            />
            <Recipe2/>
        </div>
    );
};

export default Subrecipe;