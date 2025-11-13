import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import '../index.css';
import './PizzaPage.css';
import apiClient from '../api/apiClient';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GenerateCard from './components/GenerateCard';

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

    return <>{!pizza ? <h1>Pizza Not Found</h1> : <>{GenerateCard(pizza)}</>}</>;
};

export default PizzaPage;
