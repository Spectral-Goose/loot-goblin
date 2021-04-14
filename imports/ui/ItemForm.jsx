import React, { useState } from 'react';
import { ItemsCollection } from '/imports/api/ItemsCollection';

export const ItemForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        ItemsCollection.insert({
            text: text.trim(),
            createdAt: new Date()
        });

        setText("");
    };

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type to add new items"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Add Item</button>
        </form>
    );
};