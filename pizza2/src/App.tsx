import { useEffect, useState } from 'react';
import './App.css';
import type { Pizza } from './types/Pizza';
import apiClient, { BACKEND_URL } from './api/apiClient';
import { useNavigate } from 'react-router-dom';

function App() {
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
            <button onClick={() => navigate('/new-pizza', { replace: true })}>Create new</button>
            {pizzas.map((p) => (
                <>
                    <div onClick={() => navigate(`/pizza/${p.id}`, { replace: true })}>
                        <h2>
                            {p.nev} - {p.ar}
                        </h2>
                        <p>{p.leiras}</p>
                        <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={200} alt={p.nev} />
                    </div>
                </>
            ))}
        </>
    );
}

export default App;
