import type React from 'react';
import type { Pizza } from '../types/Pizza';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import './CreatePizzaPage.css';
import { toast } from 'react-toastify';
import CreateOrEditPizzaCard from '../components/CreateOrEditPizzaCard';

const CreatePizzaPage: React.FC = () => {
    const navigate = useNavigate();

    const savePizza = (pizza: Pizza) => {
        apiClient
            .post('/pizzak', pizza)
            .then(() => {
                toast.success('Pizza Saved Successfully');
                navigate('/');
            })
            .catch(() => toast.error('Failed To Save Pizza'));
    };

    return (
        <>
            <h1 style={{ backgroundColor: 'rgb(24,24,24)', padding: '10px' }}>Pizza Shop</h1>
            <CreateOrEditPizzaCard
                onCancel={() => navigate('/')}
                onSave={(pizza) => savePizza(pizza)}
            />
        </>
    );
};

export default CreatePizzaPage;
