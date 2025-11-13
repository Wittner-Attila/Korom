import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import '../index.css';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import GenerateCard from './components/GenerateCard';
import { Button, Col, Container, Row } from 'react-bootstrap';

const PizzasPage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => setPizzas(response.data))
            .catch(() => toast.error('Failed to get pizza'));
    }, []);

    return (
        <>
            <h1>Pizzas</h1>
            {pizzas.length === 0 ? (
                <h1>No Pizzas Found</h1>
            ) : (
                <Container>
                    <Button variant="primary">Make New Pizza</Button>
                    {for (let i = 0; i < array.length; i++) {
                        const element = array[i];
                        
                    }}
                </Container>
            )}
        </>
    );
};

export default PizzasPage;
