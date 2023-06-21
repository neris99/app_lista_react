
import { Card } from '../../components/Card/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalCreatFolder } from '../../containers/ModalCreatFolder/ModalCreatFolder';
import { Notificacion } from '../../components/Notificacion/Notificacion';
import { ModalSalvePin } from '../../containers/ModalSavePin/ModalSavePin';
import { useAppContext } from '../../store/AppContext';



export const HomePages = () => {
    const value = useAppContext()
    return(
        <div>
            <ModalSalvePin open={false}/>
            <ModalCreatFolder open={false}/>
            <Notificacion 
            message = 'Criado com sucesso'
            onClose ={() =>{
                console.log("Clicou em fechar")
            }}/>
                <span>{value.name}</span>
            <Container fluid>
        <Row>
            <Col sx={12} md={2}><Card title='Matemática' image='https://picsum.photos/200/300?53' total={0}/></Col>
            <Col sx={12} md={2}><Card title='Trigonometria' image='https://picsum.photos/200/300?13' total={1}/></Col>
        </Row>
        </Container>
        </div>
    )
}