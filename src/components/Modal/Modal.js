import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';

import { TicketContext } from '../../store/TicketContext';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {  
    const [tickets] = useContext(TicketContext);
    const ticket = tickets.filter(ticket => ticket.id === props.ticketID)[0];

    console.log(ticket)

    const closeModal = () => {
        props.closeModal();
    };

    return ReactDOM.createPortal(
        <Fragment>
            <div className={classes.backdrop} onClick={closeModal}></div>
            <Card className={classes["modal-overlay"]}>
                <header>
                    <div>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.reporter}</p>
                        <p>{ticket.assignee}</p>
                    </div>
                    <Button onClick={closeModal}>Close</Button>
                </header>
                <p className={classes.description}>{ticket.description}</p>
                <footer>
                    <p>Priority: <span style={{color: ticket.priorityColor}}>{ticket.priority}</span></p>
                    <p>Date: {ticket.date}</p>
                </footer>
            </Card>
        </Fragment>,
    modalRoot);
};

export default Modal;