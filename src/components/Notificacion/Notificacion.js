import Alert from 'react-bootstrap/Alert';
import  ReactDOM  from 'react-dom'
import './index.css'

export const Notificacion = ({message, variant='success', onClose}) => {
    return ReactDOM.createPortal(
        <div class='notificacion'>
            <Alert variant={variant} dismissible onClose={onClose}> 
            {message}
        </Alert>
        </div>,
        document.body
    )
}