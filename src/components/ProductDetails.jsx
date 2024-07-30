// src/components/ProductDetails.jsx

import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, goBack }) => {
    return (
        <div className="product-details">
            <button className="back-button" onClick={goBack}>Back to Products</button>
            <img src={product.image} alt={product.title} className="details-image" />
            <h2 className="details-title">{product.title}</h2>
            <p className="details-description">{product.description}</p>
            <p className="details-price">${product.price}</p>
            <button className="buy-button">Buy Now</button>
        </div>
    );
};

export default ProductDetails;
