import {useState} from "react";
import { Modals } from "../../components/Modal/Modal";
import Form from 'react-bootstrap/Form';

export const ModalCreatFolder = ( {open} ) => {
    const [folderName, setFolderName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fez o submit', folderName)
    }
    const handleChange = (e) => {
        setFolderName(e.target.value)
    } 
    return(
        <Modals
        open={open}
        title="Criar Pasta"
        controls={[
            {
                label:'Criar e Salvar',
                loadingLabel:"Criando",
                variant: 'secundary',
                loading: false,
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