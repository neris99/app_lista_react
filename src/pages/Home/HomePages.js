import { Card } from '../../components/Card/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalCreatFolder } from '../../containers/ModalCreatFolder/ModalCreatFolder';

export const HomePages = () => {
    return(
        <div>
            <ModalCreatFolder open={true}/>
            <Container fluid>
        <Row>
            <Col sx={12} md={2}><Card title='Matemática' image='https://picsum.photos/200/300?53' total={0}/></Col>
            <Col sx={12} md={2}><Card title='Trigonometria' image='https://picsum.photos/200/300?13' total={1}/></Col>
        </Row>
        </Container>
        </div>
    )
}