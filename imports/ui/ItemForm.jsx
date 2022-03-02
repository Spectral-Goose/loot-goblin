import React, { useState } from 'react';
import { ItemsCollection } from '/imports/api/ItemsCollection';

export const ItemForm = () => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("#000000");
    const [location, setLocation] = useState("");
    const [quantity, setQuantity] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;
        if (!location) return;
        if (!quantity) return;
        if (!weight) return;
        if (!price) return;

        ItemsCollection.insert({
            text: text.trim(),
            color: color,
            location: location,
            quantity: quantity,
            weight: weight,
            price: price,
            createdAt: new Date()
        });

        setText("");
        setColor("#000000");
        setLocation("");
        setQuantity("");
        setWeight("");
        setPrice("");
    };

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item name"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                class="color-picker"
                type="color"
                placeholder="Item text color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Item location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="number"
                placeholder="Item quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Weight per item"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price per item"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};