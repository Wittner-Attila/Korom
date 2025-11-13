import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import '../index.css';
import './PizzasPage.css';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const PizzasPage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => setPizzas(response.data))
            .catch((result) => console.error(result));
    }, []);

    return (
        <>
            <h1>Pizzas</h1>
            <button onClick={() => navigate('/new')}>Make New Pizza</button>
            {pizzas.length === 0 ? (
                <h1>No Pizzas Found</h1>
            ) : (
                <div className="pizza">
                    {pizzas.map((pizza) => (
                        <div onClick={() => navigate(`/pizzas/${pizza.id}`)}>
                            <h2 className="pizza-name">
                                {pizza.nev} - {pizza.ar} Ft
                            </h2>
                            <img
                                className="pizza-image"
                                src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
                                alt={pizza.imageUrl.replace('.png', '')}
                                title={pizza.imageUrl.replace('.png', '')}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default PizzasPage;
