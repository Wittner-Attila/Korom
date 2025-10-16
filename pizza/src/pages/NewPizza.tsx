import { useState } from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient from '../api/apiClient';

const NewPizza = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const savePizza = () => {
        const pizza: Pizza = {
            nev: name,
            ar: price,
            leiras: description,
            imageUrl: imageUrl,
        };

        apiClient
            .post('/pizzak', JSON.stringify(pizza))
            .then((response) => alert(response.status))
            .catch((result) => console.error(result));
    };

    return (
        <>
            <h1>Make a new pizza</h1>
            <div>
                <h2>Name for pizza</h2>
                <input
                    type="text"
                    placeholder="pizza name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <h2>Description for pizza</h2>
                <input
                    type="text"
                    placeholder="pizza description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <h2>Price for pizza</h2>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <h2>Image URL for pizza</h2>
                <input
                    type="text"
                    placeholder="pizza.png"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <br />
            <button onClick={savePizza}>Save</button>
        </>
    );
};

export default NewPizza;
