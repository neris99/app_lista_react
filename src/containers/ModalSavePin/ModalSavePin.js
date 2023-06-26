import { useEffect } from "react";
import { Modals } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import { fetchFoldersAction, openModalCreatFolder } from "../../store/actions";


export const ModalSalvePin = ({open}) => {
    const {state, dispatch} = useAppContext();
    const handleClose = () => {
        console.log('Fechando')
        dispatch(closeModalsAction())
    }    


    const handleClickCreatFolder = () => {
        console.log("Clicou em criar pasta")
        dispatch(openModalCreatFolder())
    }

    useEffect(() => {
        fetchFoldersAction(dispatch)
    },[])

    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <Modals 
        title='Salvar Pin' 
        open={open} 
        onHide={handleClose}
        controls={[
            {
                label: 'Criar pasta',
                variant: 'secondary',
                onClick: handleClickCreatFolder
            }
        ]}>
                <ListGroup variant="flush">
                    {state.folders.map((folder, folderIndex) => (
                        <ListGroup.Item key={folderIndex}>
                            <Row>
                                <Col xs={8}>{folder.name}</Col>
                                <Col className="text-end" xs={4}><Button label='Salvar' loadingLabel='Salvando'/></Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        </Modals>
    )
}
