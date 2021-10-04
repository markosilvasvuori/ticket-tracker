import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Ticket Tracker</h1>
            <Button>+ Add Ticket</Button>
        </header>
    );
};

export default Header;