import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Pizza } from '../types/Pizza';
import apiClient, { BACKEND_URL } from '../api/apiClient';

const PizzaPage = () => {
    const navigate = useNavigate();
    const id: number = Number(useParams().id);
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((result) => console.error(result));
    }, []);

    const deletePizza = () => {
        apiClient
            .delete(`pizzak/${id}`)
            .then((response) => {
                alert(response.status);
                navigate('/', { replace: true });
            })
            .catch((result) => console.error(result));
    };

    return (
        <>
            {pizza ? (
                <>
                    <button onClick={deletePizza}>Delete</button>
                    <button onClick={() => navigate(`/edit-pizza/${id}`, { replace: true })}>
                        Edit
                    </button>
                    <div>
                        <h2>
                            {pizza.nev} - {pizza.ar}
                        </h2>
                        <img
                            width={200}
                            src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
                            alt={pizza.nev}
                        />
                    </div>
                    <button onClick={() => navigate('/', { replace: true })}>Back</button>
                </>
            ) : (
                <>
                    <h2>Pizza Not Found</h2>
                </>
            )}
        </>
    );
};

export default PizzaPage;
