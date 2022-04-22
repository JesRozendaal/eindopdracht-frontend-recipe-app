import React from 'react';
import './Textblock.css'

const Textblock = ({title, text1, text2}) => {
    return (
        <article className="text-box">
            <p className="title-in-text-box">{title}</p>
            <p>{text1}</p>
            <p>{text2}</p>
        </article>
    );
};

export default Textblock;