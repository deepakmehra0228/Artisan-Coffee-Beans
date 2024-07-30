// src/components/AddProductForm.jsx

import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ addProduct }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ 
            id: Date.now(), // Unique ID
            title, 
            description, 
            image, 
            price: parseFloat(price) 
        });
        setTitle('');
        setDescription('');
        setImage('');
        setPrice('');
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input 
                    type="url" 
                    id="image" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input 
                    type="number" 
                    id="price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required 
                />
            </div>
            <button type="submit" className="submit-button">Add Product</button>
        </form>
    );
};

export default AddProductForm;
