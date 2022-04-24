import React from 'react';
import './Header.css';
import Navbar from "../navbar/Navbar";

const Header = ({title, className}) => {
    return (
        <>
            <Navbar/>
            <header className={className}>
                <div className="title-container">
                    <h1>{title}</h1>
                </div>
            </header>
        </>
    );
};

export default Header;