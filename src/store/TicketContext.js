import { createContext, useState } from 'react';

export const TicketContext = createContext();

export const TicketProvider = props => {
    const [tickets, setTickets] = useState([
        {
            id: 384,
            title: 'Title',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'Low'
        },
        {
            id: 38334,
            title: 'Title 1',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'Medium'
        },
        {
            id: 483,
            title: 'Title 2',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'High'
        },
        {
            id: 48343,
            title: 'Title 2',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'High'
        },
    ]);

    return (
        <TicketContext.Provider value={[tickets, setTickets]}>
            {props.children}
        </TicketContext.Provider>
    );
};