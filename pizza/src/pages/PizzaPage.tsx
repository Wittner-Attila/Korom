import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import type { Pizza } from '../types/Pizza';

const PizzaPage = () => {
    const [pizza, setPizza] = useState<Pizza>();
    const navigate = useNavigate();
    const id: number = Number(useParams().id);

    useEffect(() => {
        apiClient.get(`pizzak/${id}`).then((response) => setPizza(response.data));
    }, []);

    const deletePizza = () => {
        apiClient
            .delete(`/pizzak`)
            .then((response) => {
                alert(response.status);
                navigate('/');
            })
            .catch((result) => console.error(result));
    };

    return (
        <>
            {pizza ? (
                <>
                    <div>
                        <button onClick={deletePizza} style={{ backgroundColor: 'red' }}>
                            Delete
                        </button>
                        <button
                            onClick={() => navigate(`/edit-pizza/${id}`)}
                            style={{ backgroundColor: 'green' }}
                        >
                            Edit
                        </button>
                        <h2>
                            {pizza?.nev} - {pizza?.ar}
                        </h2>
                        <img
                            src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`}
                            width={200}
                            alt={pizza?.nev}
                        />
                    </div>
                    <button onClick={() => navigate('/')}>Back</button>
                </>
            ) : (
                <>
                    <h1>Pizza not found</h1>
                </>
            )}
        </>
    );
};

export default PizzaPage;
