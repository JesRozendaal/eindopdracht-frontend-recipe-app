import React from 'react';
import './Button.css';

const Button = ({type, name, onClick, disabled}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;