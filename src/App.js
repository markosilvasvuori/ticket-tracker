import { TicketProvider } from './store/TicketContext';
import Header from './components/Layout/Header';
import TicketForm from './components/Tickets/TicketForm/TicketForm';
import TicketList from './components/Tickets/TicketList/TicketList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TicketForm />
      <TicketProvider>
        <TicketList />
      </TicketProvider>
    </div>
  );
}

export default App;