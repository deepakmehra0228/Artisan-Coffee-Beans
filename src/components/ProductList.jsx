// src/components/ProductList.jsx

import React from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = ({ products, selectProduct }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Card 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    onClick={() => selectProduct(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;
