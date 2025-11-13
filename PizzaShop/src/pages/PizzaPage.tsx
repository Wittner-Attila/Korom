import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import '../index.css';
import './PizzaPage.css';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import { useNavigate, useParams } from 'react-router-dom';

const PizzaPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((result) => console.error(result));
    }, []);

    const deletePizza = () => {
        apiClient
            .delete(`/pizzak/${id}`)
            .then((response) => {
                alert(response.statusText);
                navigate('/pizzas');
            })
            .catch((result) => console.error(result));
    };

    return (
        <>
            {!pizza ? (
                <h1>Pizza Not Found</h1>
            ) : (
                <>
                    <button onClick={() => navigate('/pizzas')}>Back</button>
                    <h2 className="pizza-name">
                        {pizza.nev} - {pizza.ar} Ft
                    </h2>
                    <img
                        className="pizza-image"
                        src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
                        alt={pizza.imageUrl.replace('.png', '')}
                        title={pizza.imageUrl.replace('.png', '')}
                    />
                    <br />
                    <button className="edit" onClick={() => navigate(`/edit/${id}`)}>
                        Edit
                    </button>{' '}
                    <button className="delete" onClick={() => deletePizza()}>
                        Delete
                    </button>
                </>
            )}
        </>
    );
};

export default PizzaPage;
