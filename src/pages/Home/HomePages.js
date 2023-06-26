import { useState, useEffect } from 'react';
import { CardContainer } from '../../containers/Card/Card';
import { Card } from '../../components/Card/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalCreatFolder } from '../../containers/ModalCreatFolder/ModalCreatFolder';
import { Notificacion } from '../../components/Notificacion/Notificacion';
import { ModalSalvePin } from '../../containers/ModalSavePin/ModalSavePin';
import { useAppContext } from '../../store/AppContext';
import { saveFolderSuccessType } from '../../store/types';


export const HomePages = () => {
    const {state, dispatch} = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false)

    useEffect(() => {
        if (state.type === saveFolderSuccessType){
            setShowFeedback(true)
        }
    },[state.type])

    return(
        <div>
            <ModalSalvePin open={state.mode === 'savePin'}/>
            <ModalCreatFolder open={state.mode === 'createFolder'}/>
            {state.type === saveFolderSuccessType &&(
                <Notificacion 
                    message = 'Criado com sucesso'
                    onClose ={() => setShowFeedback(false)
                }/>
            )}
            <Container fluid>
        <Row>
            <Col sx={12} md={2}><CardContainer id='123' title='Matemática' image='https://picsum.photos/200/300?53' total={0}/></Col>
            <Col sx={12} md={2}><CardContainer id='133' title='Trigonometria' image='https://picsum.photos/200/300?13' total={1}/></Col>
        </Row>
        </Container>
        </div>
    )
}