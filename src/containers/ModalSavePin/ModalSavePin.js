import { useEffect, useState } from "react";
import { Modals } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import { 
    fetchFoldersAction, 
    openModalCreatFolder,
    savePinInFolderAction
} from "../../store/actions";


export const ModalSalvePin = ({open}) => {
    const {state, dispatch} = useAppContext();
    const [intensLoading, setItensLoading] = useState({})
    const handleClose = () => {
        console.log('Fechando')
        dispatch(closeModalsAction())
    }    


    const handleClickCreatFolder = () => {
        console.log("Clicou em criar pasta")
        dispatch(openModalCreatFolder())
    }

    const foldersNormalized = state.folders.map(folder => {
        return({
            ...folder,
            saved: folder.pins.includes(state.activePinId)
        })
    })

    useEffect(() => {
        fetchFoldersAction(dispatch)
    },[])

    const handleClick = async (folderId) => {
        // loading true
        /**
         * 'asd-321': true
         * 'abc-123': true
         */
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: true
            }
        })
        await savePinInFolderAction(dispatch, state.activePinId, folderId)
        // loading false
        /**
         * 'asd-321': false
         * 'abc-123': false
         */
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: false
            }
        })
    }

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
                    {foldersNormalized.map((folder, folderIndex) => (
                        <ListGroup.Item key={folderIndex}>
                            <Row>
                                <Col xs={8}>{folder.name}</Col>
                                <Col className="text-end" xs={4}>
                                    <Button 
                                    label= {folder.saved ? 'Salvo' : 'Salvar'}
                                    loadingLabel='Salvando' 
                                    onClick={() => handleClick(folder.id)}
                                    variante={folder.salved ? 'secundary' : 'primary'}
                                    //disabled={folder.saved}
                                    disabled={true}
                                    loading={intensLoading[folder.id]}
                                    />
                                    </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        </Modals>
    )
}
