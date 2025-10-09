import { useEffect, useState } from 'react';
import apiCaller, { BACKEND_URL } from '../api/apiCaller';
import type { Pizza } from '../types/Pizza';
import { useNavigate, useParams } from 'react-router';

const PizzaPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        apiCaller
            .get('/pizzak/' + Number(id))
            .then((response) => setPizza(response.data))
            .catch((result) => console.error(result));
    }, []);

    return !pizza ? (
        <>
            <h2>Pizza not Found</h2>
            <button onClick={() => navigate('/')}></button>
        </>
    ) : (
        <>
            <h2>
                {pizza.nev} - {pizza.ar}
            </h2>
            <img src={BACKEND_URL + '/kepek/' + pizza.imageUrl} width={400} alt={pizza.nev} />
            <p>{pizza.leiras}</p>
            <button onClick={() => navigate('/', { state: { pizzaId: id } })}>
                Back to pizzas
            </button>
        </>
    );
};

export default PizzaPage;
