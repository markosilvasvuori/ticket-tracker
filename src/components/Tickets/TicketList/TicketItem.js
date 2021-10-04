import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from './TicketItem.module.css';

const TicketItem = ({ title, description, reporter, assignee, date, priority }) => {
    return (
        <li>
            <Card>
                <div className={classes.ticket}>
                    <header>
                        <div>
                            <h3>{title}</h3>
                            <p>{reporter}</p>
                            <p>{assignee}</p>
                        </div>
                        <Button>X</Button>
                    </header>
                    <p className={classes.description}>{description}</p>
                    <footer>
                        <p>Priority: {priority}</p>
                        <p>Date: {date}</p>
                    </footer>
                </div>
            </Card>
        </li>
    );
};

export default TicketItem;