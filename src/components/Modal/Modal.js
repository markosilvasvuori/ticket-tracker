import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';

import { TicketContext } from '../../store/TicketContext';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Modal.module.css';

const Modal = props => {  
    const [tickets] = useContext(TicketContext);
    const ticket = tickets.filter(ticket => ticket.id === props.ticketID)[0];
    const modalRoot = document.querySelector('#modal-root');

    const closeModal = () => {
        props.closeModal();
    };

    return ReactDOM.createPortal(
        <Fragment>
            <div className={classes.backdrop} onClick={closeModal}></div>
            <Card className={classes["modal-overlay"]}>
                <header>
                    <h3 style={{color: ticket.priorityColor}}>{ticket.title}</h3>
                    <Button onClick={closeModal}>Close</Button>
                </header>
                <p className={classes.description}>{ticket.description}</p>
                <footer>
                    <div>
                        <h4>Reporter:</h4>
                        <p>{ticket.reporter}</p>
                    </div>
                    <div>
                        <h4>Assignee:</h4>
                        <p>{ticket.assignee}</p>
                    </div>
                    <div>
                        <h4>Priority:</h4>
                        <p style={{color: ticket.priorityColor}}>{ticket.priority}</p>
                    </div>
                    <div>
                        <h4>Date:</h4>
                        <p>{ticket.date}</p>
                    </div>
                </footer>
            </Card>
        </Fragment>,
    modalRoot);
};

export default Modal;