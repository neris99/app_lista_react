import {useState, useEffect} from "react";
import { Modals } from "../../components/Modal/Modal";
import Form from 'react-bootstrap/Form';
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction, saveFolderAction } from "../../store/actions";
import { saveFolderInitType, saveFolderSuccessType } from "../../store/types";

export const ModalCreatFolder = ( {open} ) => {
    const {state, dispatch} = useAppContext()
    const [folderName, setFolderName] = useState('')

    const handleClose = () => {
        dispatch(closeModalsAction())
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fez o submit', folderName)
        saveFolderAction(dispatch, folderName)
        //handleClose()
    }

    const handleChange = (e) => {
        setFolderName(e.target.value)
    } 

/*
    useEffect(() => {
        if (state.type === saveFolderSuccessType){
            handleClose()
        }
    }, [state.type])
*/

    return(
        <Modals
        open={open}
        title="Criar Pasta"
        onHide={handleClose}
        controls={[
            {
                label:'Criar e Salvar',
                loadingLabel:"Criando",
                variant: 'secundary',
                loading: state.type === saveFolderInitType,
                type:'submit',
                form:'form-criar-pasta'
            }
            ]}>
            <Form onSubmit={handleSubmit} id='form-criar-pasta'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Matemática" value={folderName} onChange={handleChange}/>
                </Form.Group>
            </Form>
        </Modals>
    )
}