import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';
import type { Pizza } from '../types/Pizza';

const EditPizza = () => {
    const id: number = Number(useParams().id);
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [put, setPut] = useState<boolean>(false);

    useEffect(() => {
        apiClient
            .get(`pizzak/${id}`)
            .then((response) => {
                setName(response.data.nev);
                setDesc(response.data.leiras);
                setPrice(response.data.ar);
                setImg(response.data.imageUrl);
            })
            .catch((result) => console.error(result));
    }, []);

    const savePizza = () => {
        const pizza: Pizza = {
            nev: name,
            leiras: desc,
            ar: price,
            imageUrl: img,
        };

        if (put) {
            apiClient
                .put(`pizzak/${id}`, pizza)
                .then((response) => {
                    alert(response.status);
                    navigate('/', { replace: true });
                })
                .catch((result) => console.error(result));
        } else {
            apiClient
                .patch(`pizzak/${id}/price`, { ar: price })
                .then((response) => {
                    alert(response.status);
                    navigate('/', { replace: true });
                })
                .catch((result) => console.error(result));
        }
    };

    return (
        <>
            <h1>Edit Pizza</h1>
            <div>
                <h2>Name</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setPut(true);
                    }}
                />
                <h2>Description</h2>
                <input
                    type="text"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                        setPut(true);
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
                        setPut(true);
                    }}
                />
            </div>
            <br />
            <button onClick={savePizza}>Update</button>
            <br />
            <button onClick={() => navigate(`/pizza/${id}`)}>Back</button>
        </>
    );
};

export default EditPizza;
