import { useEffect, useState } from 'react';
import './App.css';
import type { Pizza } from './types/Pizza';
import apiCaller, { BACKEND_URL } from './api/apiCaller';
import { useLocation, useNavigate } from 'react-router';

function App() {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        apiCaller
            .get('/pizzak')
            .then((response) => {
                setPizzas(response.data);
            })
            .catch((result) => {
                console.error(result);
            });
    }, []);

    useEffect(() => {
        if (pizzas.length === 0) return;
        const pizzaId = location.state?.pizzaId;
        if (pizzaId) {
            const element = document.getElementById(String(pizzaId));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            navigate('.', { replace: true, state: {} });
        }
    }, [pizzas, location.state, navigate]);

    return (
        <>
            {pizzas.map((p) => (
                <div id={`${p.id}`} onClick={() => navigate(`/pizza/` + p.id)}>
                    <h2>
                        {p.nev} - {p.ar}
                    </h2>
                    <img src={BACKEND_URL + '/kepek/' + p.imageUrl} width={300} alt={p.nev} />
                </div>
            ))}
        </>
    );
}

export default App;
