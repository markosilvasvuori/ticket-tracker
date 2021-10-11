import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = props => {
    const toggleForm = (e) => {
        e.preventDefault();
        props.onToggle();
    };

    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <h1>Ticket Tracker</h1>
                <Button onClick={toggleForm}>+ Add Ticket</Button>
            </div>
        </header>
    );
};

export default Header;