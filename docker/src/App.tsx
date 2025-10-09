import { useEffect, useState } from 'react';
import './App.css';
import type { Pizza } from './types/Pizza';
import apiClient, { BACKEND_URL } from './api/apiClient';

function App() {
    const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => setPizzas(response.data))
            .catch((result) => console.error(result));
    }, []);

    return (
        <>
            {pizzas.map((p) => (
                <div>
                    <h2>{p.nev}</h2>
                    <img
                        className="pizza"
                        src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
                        width={300}
                        alt={p.nev}
                    />
                </div>
            ))}
        </>
    );
}

export default App;
