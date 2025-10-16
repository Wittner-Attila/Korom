import { useState } from 'react';
import apiClient from '../api/apiClient';
import type { Pizza } from '../types/Pizza';
import { useNavigate } from 'react-router-dom';

const NewPizza = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const savePizza = () => {
        const pizza: Pizza = {
            nev: name,
            leiras: desc,
            ar: price,
            imageUrl: img,
        };

        apiClient
            .post(`pizzak/`, pizza)
            .then((response) => {
                alert(response.status);
                navigate('/', { replace: true });
            })
            .catch((result) => console.error(result));
    };

    return (
        <>
            <h1>Create new Pizza</h1>
            <div>
                <h2>Name</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <h2>Description</h2>
                <input
                    type="text"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <h2>Price</h2>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                        setPrice(Number(e.target.value));
                    }}
                />
                <h2>Image URL</h2>
                <input
                    type="text"
                    value={img}
                    onChange={(e) => {
                        setImg(e.target.value);
                    }}
                />
            </div>
            <br />
            <button onClick={savePizza}>Save</button>
            <br />
            <button onClick={() => navigate(`/`, { replace: true })}>Back</button>
        </>
    );
};

export default NewPizza;
