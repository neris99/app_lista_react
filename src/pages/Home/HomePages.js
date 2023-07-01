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
import { fetchPinsAction } from '../../store/actions';


export const HomePages = () => {
    const {state, dispatch} = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false)

    const pinsNormalized = state.pins.map(pin => {
        return({
            ...pin,
            total: state.folders.filter(folder => {
                return folder.pins.includes(pin.id)
            }).length
        })
    })

    useEffect(() => {
        fetchPinsAction(dispatch)
    },[])

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
            {pinsNormalized.map(pin => (
                <Col key={pin.id} sx={12} md={2}>
                    <CardContainer {...pin}/>
                </Col>
            ))} 
        </Row>
        </Container>
        </div>
    )
}