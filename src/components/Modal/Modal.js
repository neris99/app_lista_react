import { Button } from '../Button/Button';
import Modal from 'react-bootstrap/Modal';

export const Modals = ({title, children, open, controls=[], onHide}) => {
    return(
        <Modal show={open} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
            {controls.map((control, controlIndex) => (
                            <Button 
                            key={controlIndex} 
                                {...control}
                            />
            ))}
        </Modal.Footer>
        </Modal>
    )
}