import { faSave, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import type { Pizza } from '../types/Pizza';
import { useEffect, useState } from 'react';

type CreateOrEditPizzaCardProps = {
    pizza?: Pizza;
    edit?: boolean;
    onCancel: () => void;
    onSave: (pizza: Pizza) => void;
};

const CreateOrEditPizzaCard: React.FC<CreateOrEditPizzaCardProps> = (props) => {
    const { edit, pizza, onCancel, onSave } = props;
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [desc, setDesc] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        if (pizza) {
            setName(pizza.nev || '');
            setPrice(pizza.ar || 0);
            setDesc(pizza.leiras || '');
            setImageUrl(pizza.imageUrl || '');
        }
    }, [pizza]);

    return (
        <Card className="Create base">
            {!edit ? <h2>Create New Pizza</h2> : <h2>Edit Pizza</h2>}
            <CardBody className="body">
                <CardTitle className="title">
                    <label htmlFor="Name">Pizza's Name:</label>
                    <input
                        maxLength={20}
                        id="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </CardTitle>
                <CardText className="description">
                    <label htmlFor="Desc">Description:</label>
                    <textarea
                        maxLength={50}
                        id="Desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <label htmlFor="Price">Price:</label>
                    <input
                        maxLength={20}
                        id="Price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        type="number"
                    />
                    <label htmlFor="Image">Pizza's Image:</label>
                    <input
                        maxLength={20}
                        id="Image"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        type="text"
                    />
                </CardText>
                <div className="buttons">
                    <Button
                        onClick={() =>
                            onSave({ nev: name, ar: price, leiras: desc, imageUrl: imageUrl })
                        }
                        className="button"
                    >
                        <FontAwesomeIcon icon={faSave} />
                    </Button>
                    <Button onClick={onCancel} className="button">
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default CreateOrEditPizzaCard;
