import { createContext, useState } from 'react';

export const TicketContext = createContext();

export const TicketProvider = props => {
    const storedTickets = JSON.parse(localStorage.getItem('stored-tickets'));

    const checkForLocalStorage = () => {
        // localStorage.clear();
        if (storedTickets) {
            return storedTickets;
        } else {
            return [
                {
                    id: 'default1',
                    isSolved: false,
                    title: 'Welcome',
                    description: `New tickets/bug reports can be created by clicking "Add Ticket".
                    
                    Status of a ticket can be changed from "Open" to "Solved" by clicking the status label on ticket."

                    Tickets are stored in local storage and can be removed by clicking "X" button on ticket.`,
                    reporter: 'John Doe',
                    assignee: 'Anyone',
                    date: '12.10.2021',
                    priority: 'Low',
                    priorityColor: '#0cca98'
                },
                {
                    id: 'default2',
                    isSolved: false,
                    title: 'Clicking ticket opens it in modal',
                    description: 'To see full information of a ticket you can click it to open it in modal!',
                    reporter: 'Jane Doe',
                    assignee: 'Anyone',
                    date: '12.10.2021',
                    priority: 'Medium',
                    priorityColor: '#dd893b'
                },
                {
                    id: 'default3',
                    isSolved: false,
                    title: 'Lorem ipsum dolor sit amet',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit diam. Sed nec lectus consequat nibh sagittis maximus id id nisl. Cras sodales ornare nisi mollis ullamcorper. Duis dapibus cursus tempor.`,
                    reporter: 'John',
                    assignee: 'Jane',
                    date: '2.10.2021',
                    priority: 'low',
                    priorityColor: '#0cca98'
                },
                {
                    id: 'default4',
                    isSolved: false,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit diam. 
                    
                    Sed nec lectus consequat nibh sagittis maximus id id nisl. Cras sodales ornare nisi mollis ullamcorper. Duis dapibus cursus tempor. 
                    
                    Suspendisse ac ante ut ex rhoncus hendrerit in non arcu. Nulla placerat magna id urna egestas egestas. Ut bibendum ipsum justo, eu congue purus imperdiet sollicitudin.`,
                    reporter: 'Lorem Ipsum',
                    assignee: 'Jane Doe',
                    date: '29.9.2021',
                    priority: 'low',
                    priorityColor: '#0cca98'
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