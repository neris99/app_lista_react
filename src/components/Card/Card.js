import CardBS from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../store/AppContext';

export const Card = ({image, title, total}) => {
    const user = useAppContext();
return (
    <CardBS>
        <CardBS.Img src={image} alt="CardBS image" />
        <CardBS.ImgOverlay>
            <Button variant="primary">
                Salvar <Badge bg="secondary">{total}</Badge>
            </Button>
        </CardBS.ImgOverlay>
        <CardBS.Body>
            <CardBS.Title>{title}</CardBS.Title>
        </CardBS.Body>
    </CardBS>
);
}

