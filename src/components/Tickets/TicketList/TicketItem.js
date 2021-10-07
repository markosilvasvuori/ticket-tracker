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

    const priorityColor = () => {
        const priority = props.priority;

        if (priority === 'Low') {
            return classes.low;
        } else if (priority === 'Medium') {
            return classes.medium;
        } else {
            return classes.high;
        }
    };

    const handleStatus = (e) => {
        e.preventDefault();

        let ticketsCopy = [...tickets];
        const ticket = ticketsCopy.filter(ticket => ticket.id === props.id);
        const index = ticketsCopy.findIndex(index => index.id === ticket[0].id);
        ticket[0].isSolved = ticket[0].isSolved ? false : true;
        ticketsCopy[index] = ticket[0];

        localStorage.setItem('stored-tickets', JSON.stringify(ticketsCopy));
        setTickets(ticketsCopy);
    };

    return (
        <li>
            <Container>
                <div className={classes["header-buttons"]}>
                    <Button 
                        className={props.isSolved ? classes.solved : classes.open}
                        onClick={handleStatus}
                    >
                        {props.isSolved ? 'Solved' : 'Open'}
                    </Button>
                    <Button className={classes["button-red"]} onClick={toggleConfirmDelete}>X</Button>
                </div>
                <Card className={classes.ticket}>
                    {/* <div className={classes.ticket}> */}
                        <header>
                            <div>
                                <h3>{props.title}</h3>
                                <p>{props.reporter}</p>
                                <p>{props.assignee}</p>
                            </div>
                        </header>
                        <p className={classes.description}>{props.description}</p>
                        <footer>
                            <p>Priority: <span className={priorityColor()}>{props.priority}</span></p>
                            <p>Date: {props.date}</p>
                        </footer>
                    {/* </div> */}
                </Card>
                {isDeleting && 
                    <div className={classes["confirm-delete"]}>
                        <p>Are you sure you want to delete this?</p>
                        <div>
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