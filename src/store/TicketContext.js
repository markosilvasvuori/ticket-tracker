import { createContext, useState } from 'react';

export const TicketContext = createContext();

export const TicketProvider = props => {
    const storedTickets = JSON.parse(localStorage.getItem('stored-tickets'));

    const checkForLocalStorage = () => {
        if (storedTickets) {
            return storedTickets;
        } else {
            return [
                {
                    id: 'default1',
                    isSolved: false,
                    title: 'Title',
                    description: 'Description',
                    reporter: 'John Doe',
                    assignee: 'Jane',
                    date: '4.10.2021',
                    priority: 'Low',
                    priorityColor: '#0cca98'
                },
                {
                    id: 'default2',
                    isSolved: false,
                    title: 'Title 1',
                    description: 'Description',
                    reporter: 'John Doe',
                    assignee: 'Jane',
                    date: '4.10.2021',
                    priority: 'Medium',
                    priorityColor: '#dd893b'
                }
            ];
        }
    };

    const [tickets, setTickets] = useState(
        checkForLocalStorage()
    );

    return (
        <TicketContext.Provider value={[tickets, setTickets]}>
            {props.children}
        </TicketContext.Provider>
    );
};