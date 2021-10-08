import { useState } from 'react';

import { TicketProvider } from './store/TicketContext';
import Header from './components/Layout/Header';
import TicketForm from './components/Tickets/TicketForm/TicketForm';
import TicketList from './components/Tickets/TicketList/TicketList';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
    const [formIsShowing, setFormIsShowing] = useState(false);
    const [modal, setModal] = useState({isShowing: false, ID: ''});
  
    const toggleFormHandler = () => {
        return setFormIsShowing(!formIsShowing);
    };

    const modalIsShowingHandler = (ticketID) => {
        setModal({isShowing: modal.isShowing ? false : true, ID: ticketID});
    };

    return (
        <div className="App">
            <Header onToggle={toggleFormHandler} />
            <TicketProvider>
                { formIsShowing && <TicketForm onClose={toggleFormHandler} /> }
                <TicketList openModal={modalIsShowingHandler} />
                { modal.isShowing && 
                    <Modal 
                        ticketID={modal.ID} 
                        closeModal={modalIsShowingHandler} 
                    />
                }
            </TicketProvider>
        </div>
    );
}

export default App;