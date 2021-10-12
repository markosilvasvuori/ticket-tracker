import { useState, useContext } from 'react';

import { TicketContext } from '../../../store/TicketContext';
import Container from '../../Layout/Container';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from './TicketItem.module.css';

const TicketItem = (props) => {
    const [tickets, setTickets] = useContext(TicketContext);
    const [isDeleting, setIsDeleting] = useState(false);

    const toggleConfirmDelete = () => {
        setIsDeleting(!isDeleting ? true : false);
    };

    const deleteTicket = () => {
        props.onDelete(props.id);
    };

    const handleStatus = (e) => {
        e.preventDefault();

        let ticketsCopy = [...tickets];
        const ticket = ticketsCopy.filter(ticket => ticket.id === props.id)[0];
        const index = ticket.id
        ticket.isSolved = ticket.isSolved ? false : true;
        ticketsCopy[index] = ticket;

        localStorage.setItem('stored-tickets', JSON.stringify(ticketsCopy));
        setTickets(ticketsCopy);
    };

    const modalIsShowingHandler = () => {
        props.openModal(props.id);
    };

    return (
        <li>
            <Container className={`${classes["ticket-container"]} ${props.isSolved ? classes["ticket-solved"] : ''} ${classes["pop-in"]}`}>
                <div className={classes["ticket-buttons"]}>
                    <Button 
                        className={props.isSolved ? classes.solved : classes["button-green"]}
                        onClick={handleStatus}
                    >
                        {props.isSolved ? 'Solved' : 'Open'}
                    </Button>
                    <Button className={classes["button-red"]} onClick={toggleConfirmDelete}>X</Button>
                </div>
                <Card className={classes.ticket} onClick={modalIsShowingHandler}>
                    <h3 
                        className={classes["crop-title"]} 
                        style={{color: `${props.isSolved ? '#6acdf5' : props.priorityColor}`}}
                    >
                        {props.title}
                    </h3>
                    <p className={`${classes.description} ${classes["crop-description"]}`}>{props.description}</p>
                    <div className={classes.names}>
                        <h4>Reporter:</h4>
                        <p className={classes["crop-name"]}>{props.reporter}</p>
                        <h4 className={classes.separator}>Assignee:</h4>
                        <p className={classes["crop-name"]}>{props.assignee}</p>
                    </div>
                    <footer>
                        <div>
                            <h4>Priority:</h4>
                            <p style={{color: props.priorityColor}}>{props.priority}</p>
                        </div>
                        <div>
                            <h4>Created:</h4>
                            <p>{props.date}</p>
                        </div>
                    </footer>
                </Card>
                {isDeleting && 
                    <div className={classes["confirm-delete"]}>
                        <p>Are you sure you want to delete this?</p>
                        <div className={classes["button-container"]}>
                            <Button className={classes["button-green"]} onClick={deleteTicket}>Yes</Button>
                            <Button className={classes["button-red"]} onClick={toggleConfirmDelete}>No</Button>
                        </div>
                    </div>
                }
            </Container>
        </li>
    );
};

export default TicketItem;