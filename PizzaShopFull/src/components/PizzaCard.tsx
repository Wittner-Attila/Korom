import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Image } from 'react-bootstrap';
import { BACKEND_URL } from '../api/apiClient';
import type { Pizza } from '../types/Pizza';
import './PizzaCard.css';

type PizzaCardProps = {
    pizza: Pizza;
    onDelete: () => void;
    onEdit: () => void;
};

const PizzaCard: React.FC<PizzaCardProps> = (props) => {
    const { pizza, onDelete, onEdit } = props;

    return (
        <Card className="Card base">
            <Image className="image" width={200} src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} />
            <CardBody className="body">
                <CardTitle className="title">
                    {pizza.nev} - {pizza.ar} Ft
                </CardTitle>
                <CardText className="description">{pizza.leiras}</CardText>
                <div className="buttons">
                    <Button onClick={onEdit} className="button">
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    {/*
                            <Button className="button">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </Button>
                                */}
                    <Button onClick={onDelete} className="button">
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default PizzaCard;
