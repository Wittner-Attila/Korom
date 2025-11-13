import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import '../index.css';
import './PizzaPage.css';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PizzaPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch(() => toast.error('Failed to get pizza'));
    }, []);

    const deletePizza = () => {
        apiClient
            .delete(`/pizzak/${id}`)
            .then(() => {
                toast.success('Successful deletion');
                navigate('/pizzas');
            })
            .catch(() => toast.error('Failed to delete pizza'));
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
