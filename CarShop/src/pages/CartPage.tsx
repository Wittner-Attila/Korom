import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import type { Car } from '../types/Car';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import './CartPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartPage: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

    useEffect(() => {
        apiClient
            .get('/autok')
            .then((res) => {
                setCars(res.data);
                console.log(res.data);
            })
            .catch((resp) => console.error(resp.message));
    }, []);

    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

    const removeCar = (searchIndex: number) => {
        setCart(cart.filter((_, index) => index !== searchIndex));
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1>CartPage</h1>
            <Table striped bordered hover>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Milage</th>
                    <th>Price</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {cart.map((id, index) => {
                        const car = cars.find((c) => c.id === id);
                        return (
                            <>
                                <tr>
                                    <td>
                                        <img
                                            src={`${BACKEND_URL}/kepek/${car?.images[0]}`}
                                            alt={car?.images[0]}
                                        />
                                    </td>
                                    <td>
                                        {car?.marka} - {car?.modell}
                                    </td>
                                    <td>{car?.ar} Ft</td>
                                    <td>{car?.futas_km} Km</td>
                                    <td>
                                        <Button variant="danger" onClick={() => removeCar(index)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default CartPage;
