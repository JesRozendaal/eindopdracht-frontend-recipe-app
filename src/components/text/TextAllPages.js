import React from 'react';
import './TextAllPages.css';

const TextAllPages = ({children, title, image, text}) => {
    return (
        <div>
            <section>
                <img src={image} alt={text}/>
                <h2 className="title-pages">{title}</h2>
                {children}
            </section>
        </div>
    );
};

export default TextAllPages;