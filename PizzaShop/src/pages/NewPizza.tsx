import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';
import './PizzaPage.css';
import apiClient from '../api/apiClient';
import type { Pizza } from '../types/Pizza';
import { toast } from 'react-toastify';

const NewPizza = () => {
    const navigate = useNavigate();
    const [price, setPrice] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const savePizza = () => {
        const pizza: Pizza = {
            nev: name,
            ar: price,
            leiras: desc,
            imageUrl: imageUrl,
        };
        apiClient
            .post('/pizzak', pizza)
            .then(() => {
                toast.success('Successfully saved pizza');
                navigate('/pizzas');
            })
            .catch(() => toast.error('Failed to save pizza'));
    };

    return (
        <>
            <h2 className="pizza-name">Make new pizza</h2>
            <div className="form">
                <label htmlFor="Name">Name:</label>
                <input
                    value={name}
                    name="Name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                <label htmlFor="Desc">Description:</label>
                <input
                    value={desc}
                    name="Desc"
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                />
                <label htmlFor="Price">Price:</label>
                <input
                    value={price}
                    name="Price"
                    onChange={(e) => setPrice(Number(e.target.value))}
                    type="text"
                />
                <label htmlFor="Img">Image Url:</label>
                <input
                    value={imageUrl}
                    name="Img"
                    onChange={(e) => setImageUrl(e.target.value)}
                    type="text"
                />
            </div>
            <br />
            <button className="edit" onClick={() => savePizza()}>
                Save
            </button>{' '}
            <button className="delete" onClick={() => navigate('/pizzas')}>
                Cancel
            </button>
        </>
    );
};

export default NewPizza;
