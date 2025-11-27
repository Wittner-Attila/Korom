import { useEffect, useState } from 'react';
import type React from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import PizzaCard from '../components/PizzaCard';
import './OverviewPage.css';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OverviewPage: React.FC = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem('cart') ?? '[]'));
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((result) => setPizzas([...result.data].reverse()))
            .catch(() => toast.error('Error getting pizzas'));
    }, []);

    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

    const removePizza = (pizza: Pizza) => {
        apiClient
            .delete(`pizzak/${pizza.id}`)
            .then(() => {
                toast.success('Pizza Deleted Succesfully');
                setPizzas(pizzas.filter((f) => f.id !== pizza.id));
            })
            .catch(() => toast.error('Error Deleting Pizza'));
    };

    return (
        <div className="Overview">
            <h1 style={{ backgroundColor: 'rgb(24,24,24)', padding: '10px' }}>Pizza Shop</h1>
            <Container className="card-container">
                <Card className="add-new" onClick={() => navigate('/new-pizza')}>
                    +
                </Card>
                {pizzas.length !== 0 && (
                    <>
                        {pizzas.map((pizza) => (
                            <PizzaCard
                                pizza={pizza}
                                onEdit={() => navigate(`/edit-pizza/${pizza.id}`)}
                                onDelete={() => removePizza(pizza)}
                                addToCart={(id) => {
                                    toast.success('Pizza added');
                                    setCart([...cart, Number(id)]);
                                }}
                            />
                        ))}
                    </>
                )}
            </Container>
        </div>
    );
};

export default OverviewPage;
