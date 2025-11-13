import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../index.css';
import './PizzaPage.css';
import apiClient from '../api/apiClient';
import type { Pizza } from '../types/Pizza';

const EditPizza = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [price, setPrice] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => {
                setName(response.data.nev);
                setDesc(response.data.leiras);
                setPrice(response.data.ar);
                setImageUrl(response.data.imageUrl);
            })
            .catch((result) => console.error(result));
    }, []);

    const editPizza = () => {
        const pizza: Pizza = {
            nev: name,
            ar: price,
            leiras: desc,
            imageUrl: imageUrl,
        };

        apiClient
            .put(`/pizzak/${id}`, pizza)
            .then((response) => {
                alert(response.statusText);
                navigate('/pizzas');
            })
            .catch((result) => console.error(result));
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
            <button className="edit" onClick={() => editPizza()}>
                Save
            </button>{' '}
            <button className="delete" onClick={() => navigate(`/pizzas/${id}`)}>
                Cancel
            </button>
        </>
    );
};

export default EditPizza;
