import { useContext, Fragment } from 'react';

import { TicketContext } from '../../../store/TicketContext';
import TicketItem from './TicketItem';
import classes from './TicketList.module.css';

const TicketList = () => {
    const [tickets, setTickets] = useContext(TicketContext);

    const onDeleteHandler = (ticketID) => {
        const ticketsCopy = tickets.filter(ticket => ticket.id !== ticketID);
        localStorage.setItem('stored-tickets', JSON.stringify(ticketsCopy));
        setTickets(ticketsCopy);
    };

    return (
        <Fragment>
        <ul className={classes["ticket-list"]}>
            {tickets.map(ticket => (
                <TicketItem 
                    key={ticket.id}
                    id={ticket.id}
                    isSolved={ticket.isSolved}
                    title={ticket.title}
                    description={ticket.description}
                    reporter={ticket.reporter}
                    assignee={ticket.assignee}
                    date={ticket.date}
                    priority={ticket.priority}
                    onDelete={onDeleteHandler}
                />
            ))}
        </ul>
        {tickets.length === 0 && <li className={classes.msg}>No reported issues</li>}
        </Fragment>
    );
};

export default TicketList;