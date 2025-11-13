import { Card, Button } from 'react-bootstrap';
import { BACKEND_URL } from '../../api/apiClient';
import type { Pizza } from '../../types/Pizza';

const GenerateCard = (pizza: Pizza) => {
    return (
        <Card style={{ width: '18rem', alignItems: 'center', minHeight: '400px' }}>
            <Card.Img
                style={{ width: '200px' }}
                className="pizza-image"
                src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
                alt={pizza.imageUrl.replace('.png', '')}
                title={pizza.imageUrl.replace('.png', '')}
            />
            <Card.Title className="pizza-name">
                {pizza.nev} - {pizza.ar} Ft
            </Card.Title>
            <Card.Text>{pizza.leiras}</Card.Text>
            <Button variant="primary">Order</Button>
        </Card>
    );
};

export default GenerateCard;
