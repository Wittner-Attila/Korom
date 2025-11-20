import type React from 'react';
import type { Pizza } from '../types/Pizza';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';
import './EditPizzaPage.css';
import { toast } from 'react-toastify';
import CreateOrEditPizzaCard from '../components/CreateOrEditPizzaCard';
import { useEffect, useState } from 'react';

const EditPizzaPage: React.FC = () => {
    const navigate = useNavigate();
    const [pizza, setPizza] = useState<Pizza>();
    const { id } = useParams();

    useEffect(() => {
        apiClient
            .get(`pizzak/${id}`)
            .then((result) => setPizza(result.data))
            .catch(() => toast.error('Error Loading Pizza'));
    }, []);

    const savePizza = (pizza: Pizza) => {
        apiClient
            .put(`/pizzak/${id}`, pizza)
            .then(() => {
                toast.success('Pizza Updated Successfully');
                navigate('/');
            })
            .catch(() => toast.error('Failed To Update Pizza'));
    };

    return (
        <>
            <h1 style={{ backgroundColor: 'rgb(24,24,24)', padding: '10px' }}>Pizza Shop</h1>
            <CreateOrEditPizzaCard
                pizza={pizza}
                edit={true}
                onCancel={() => navigate('/')}
                onSave={(pizza) => savePizza(pizza)}
            />
        </>
    );
};

export default EditPizzaPage;
