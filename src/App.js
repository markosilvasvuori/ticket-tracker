import { useState } from 'react';

import { TicketProvider } from './store/TicketContext';
import Header from './components/Layout/Header';
import TicketForm from './components/Tickets/TicketForm/TicketForm';
import TicketList from './components/Tickets/TicketList/TicketList';
import './App.css';

function App() {
  const [formIsShowing, setFormIsShowing] = useState(false);
  
  const toggleFormHandler = () => {
    return setFormIsShowing(!formIsShowing ? true : false);
  };

  return (
    <div className="App">
      <Header onToggle={toggleFormHandler} />
      <TicketProvider>
        { formIsShowing && <TicketForm onClose={toggleFormHandler} /> }
        <TicketList />
      </TicketProvider>
    </div>
  );
}

export default App;