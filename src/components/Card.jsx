// src/components/Card.jsx

import React from 'react';
import './Card.css';

const Card = ({ title, description, image, price }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <button className="card-button">Buy Now</button>
            </div>
        </div>
    );
};

export default Card;
