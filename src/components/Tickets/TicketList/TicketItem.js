import { useState } from 'react';

import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from './TicketItem.module.css';

const TicketItem = (props) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const toggleConfirmDelete = () => {
        setIsDeleting(!isDeleting ? true : false);
    };

    const deleteTicket = () => {
        props.onDelete(props.id);
    };

    return (
        <li>
            <Card>
                <div className={`${classes.ticket} ${isDeleting ? classes.blur : ''}`}>
                    <header>
                        <div>
                            <h3>{props.title}</h3>
                            <p>{props.reporter}</p>
                            <p>{props.assignee}</p>
                        </div>
                        <Button onClick={toggleConfirmDelete}>X</Button>
                    </header>
                    <p className={classes.description}>{props.description}</p>
                    <footer>
                        <p>Priority: {props.priority}</p>
                        <p>Date: {props.date}</p>
                    </footer>
                    {isDeleting && 
                        <div className={classes["confirm-delete"]}>
                            <p>Are you sure you want to delete this?</p>
                            <div>
                                <Button onClick={deleteTicket}>Yes</Button>
                                <Button onClick={toggleConfirmDelete}>No</Button>
                            </div>
                        </div>
                    }
                </div>
            </Card>
        </li>
    );
};

export default TicketItem;