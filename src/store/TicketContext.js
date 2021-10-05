import { createContext, useState } from 'react';

export const TicketContext = createContext();

export const TicketProvider = props => {
    const [tickets, setTickets] = useState([
        {
            id: 'default1',
            title: 'Title',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'Low'
        },
        {
            id: 'default2',
            title: 'Title 1',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'Medium'
        },
        {
            id: 'default3',
            title: 'Title 2',
            description: 'Description',
            reporter: 'John Doe',
            assignee: 'Jane',
            date: '4.10.2021',
            priority: 'High'
        },
        {
            id: 'default4',
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