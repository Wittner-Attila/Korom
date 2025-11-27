import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap';
import type { Car } from '../types/Car';
import apiClient, { BACKEND_URL } from '../api/apiClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './OverviewPage.css';

const OverviewPage: React.FC = () => {
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

    return (
        <>
            <Container>
                {cars.map((car) => (
                    <Card>
                        <CardImg src={`${BACKEND_URL}/kepek/${car.images[0]}`} />
                        <CardTitle>
                            {car.marka} - {car.modell}
                        </CardTitle>
                        <CardBody>
                            <p>Price: {car.ar}</p>
                            <p>Milage: {car.futas_km}</p>
                        </CardBody>
                        <Button type="button" onClick={() => setCart([...cart, car.id])}>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                        </Button>
                    </Card>
                ))}
            </Container>
        </>
    );
};

export default OverviewPage;
