import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient from '../api/apiClient';
import { useNavigate, useParams } from 'react-router-dom';

const EditPizza = () => {
    const id: number = Number(useParams().id);
    const navigate = useNavigate();
    const [put, setPut] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => {
                setName(response.data.nev ?? '');
                setDescription(response.data.leiras ?? '');
                setPrice(Number(response.data.ar) ?? 0);
                setImageUrl(response.data.imageUrl ?? '');
            })
            .catch((result) => console.error(result));
    }, []);

    const updatePizza = () => {
        const newPizza: Pizza = {
            nev: name,
            ar: price,
            leiras: description,
            imageUrl: imageUrl,
        };

        if (put) {
            apiClient
                .put(`/pizzak/${id}`, JSON.stringify(newPizza))
                .then((response) => {
                    alert(response.status);
                    navigate(`/pizza/${id}`);
                })
                .catch((result) => console.error(result));
        } else {
            apiClient
                .patch(`/pizzak/${id}/price`, { ar: price })
                .then((response) => {
                    alert(response.status);
                    navigate(`/pizza/${id}`);
                })
                .catch((result) => console.error(result));
        }
    };

    return (
        <>
            <h1>Edit a pizza</h1>
            <div>
                <h2>Name for pizza</h2>
                <input
                    type="text"
                    placeholder="pizza name"
                    value={name}
                    onChange={(e) => {
                        setPut(true);
                        setName(e.target.value);
                    }}
                />
                <h2>Description for pizza</h2>
                <input
                    type="text"
                    placeholder="pizza description"
                    value={description}
                    onChange={(e) => {
                        setPut(true);
                        setDescription(e.target.value);
                    }}
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
                    onChange={(e) => {
                        setPut(true);
                        setImageUrl(e.target.value);
                    }}
                />
            </div>
            <br />
            <button onClick={updatePizza}>Update</button>
        </>
    );
};

export default EditPizza;
