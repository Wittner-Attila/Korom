import type React from 'react';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import type { Pizza } from '../types/Pizza';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem('cart') ?? '[]'));
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((result) => setPizzas([...result.data].reverse()))
            .catch(() => toast.error('Error getting pizzas'));
    }, []);

    const removePizza = (searchIndex: number) =>
        setCart((prev) => prev.filter((_, index) => index !== searchIndex));

    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

    return (
        <>
            <h1>Cart Contents</h1>
            <Table striped bordered hover>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {cart.map((id, index) => {
                        const pizza = pizzas.find((p) => p.id === id);
                        return (
                            <tr>
                                <td width={'100px'}>
                                    <img
                                        width={'100%'}
                                        src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`}
                                        alt={pizza?.imageUrl}
                                    />
                                </td>
                                <td>{pizza?.nev}</td>
                                <td>{pizza?.ar} Ft</td>
                                <td>
                                    <Button variant="danger" onClick={() => removePizza(index)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};
export default CartPage;
