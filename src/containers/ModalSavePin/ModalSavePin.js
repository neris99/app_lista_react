import { Modals } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ModalSalvePin = ({open}) => {
    return (
        <Modals 
        title='Salvar Pin' 
        open={open} 
        controls={[
            {
                label: 'Criar pasta',
                variant: 'secondary',
                onClick: () => {
                    console.log("Clicou em criar pasta")
                }
            }
        ]}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Matemática</Col>
                        <Col className="text-end" xs={4}><Button label='Salvar' loadingLabel='Salvando'/></Col>
                    </Row>
                    </ListGroup.Item>
                </ListGroup>
        </Modals>
    )
}
