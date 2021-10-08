import { useContext, useState } from 'react';

import { TicketContext } from '../../../store/TicketContext';
import Container from '../../Layout/Container';
import Button from '../../UI/Button';
import classes from './TicketForm.module.css';

const TicketForm = props => {
    const [tickets, setTickets] = useContext(TicketContext);
    const [enteredDetails, setEnteredDetails] = useState({
        title: '',
        description: '',
        reporter: '',
        assignee: '',
        date: '',
        priority: 'Low'
    });

    const [errors, setErrors] = useState({
        isError: false,
        title: '',
        description: '',
        reporter: '',
        assignee: ''
    });

    const closeForm = () => {
        props.onClose();
    };

    const onChangeDetail = (detail, e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                [detail]: e.target.value
            }
        });
    };

    const getDate = () => {
        const today = new Date();
        const [ day, month, year ] = [
            today.getDate(), 
            today.getMonth(), 
            today.getFullYear() 
        ];
        return `${day}.${month + 1}.${year}`;
    };

    const priorityColor = () => {
        const priority = enteredDetails.priority;

        if (priority === 'Low') {
            return 'green';
        } else if (priority === 'Medium') {
            return 'orange';
        } else {
            return 'red';
        }
    };

    const uniqueID = () => {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return dateString + randomness;
    };

    const validateForm = (e) => {
        e.preventDefault();
        if (
            enteredDetails.title.trim() === '' || 
            enteredDetails.description.trim() === '' || 
            enteredDetails.reporter.trim() === '' || 
            enteredDetails.assignee.trim() === ''
        ) {
            setErrors({
                isError: true,
                title: enteredDetails.title.trim().length ? '' : 'error',
                description: enteredDetails.description.trim().length ? '' : 'error',
                reporter: enteredDetails.reporter.trim().length ? '' : 'error',
                assignee: enteredDetails.assignee.trim().length ? '' : 'error'
            });
        }

        if (
            enteredDetails.title.trim() !== '' && 
            enteredDetails.description.trim() !== '' && 
            enteredDetails.reporter.trim() !== '' && 
            enteredDetails.assignee.trim() !== ''
        ) {
            setErrors({
                isError: false,
                title: '',
                description: '',
                reporter: '',
                assignee: ''
            });

            addTicket();
        }
    };

    const addTicket = () => {
        let ticketsCopy = tickets;
        const newTicket = {
                        id: uniqueID(),
                        isSolved: false,
                        title: enteredDetails.title,
                        description: enteredDetails.description,
                        reporter: enteredDetails.reporter,
                        assignee: enteredDetails.assignee,
                        date: getDate(),
                        priority: enteredDetails.priority,
                        priorityColor: priorityColor()
                    };
        ticketsCopy.unshift(newTicket);
        localStorage.setItem('stored-tickets', JSON.stringify(ticketsCopy));
        setTickets(ticketsCopy);
        closeForm();
    };
    
    return (
        <Container className={`${classes.fullwidth} ${classes["margin-bottom"]}`}>
            <form className={classes.form} onSubmit={validateForm}>
                <label htmlFor="title">Title</label>
                <input 
                    className={errors.title.length ? classes.error : ''}
                    id="title" type="text" 
                    placeholder="Add a descriptive title" 
                    value={enteredDetails.title} 
                    onChange={(e) => onChangeDetail('title', e)} 
                />
                <label htmlFor="description">Description</label>
                <textarea 
                    className={errors.description.length ? classes.error : ''}
                    id="description" 
                    placeholder="Add a short description" 
                    value={enteredDetails.description} 
                    onChange={(e) => onChangeDetail('description', e)} 
                />
                <div className={classes.names}>
                    <div>
                        <label htmlFor="reporter">Reporter</label>
                        <input 
                            className={errors.reporter.length ? classes.error : ''}
                            id="reporter" 
                            type="text" 
                            placeholder="Reporter" 
                            value={enteredDetails.reporter} 
                            onChange={(e) => onChangeDetail('reporter', e)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="assignee">Assignee</label>
                        <input 
                            className={errors.assignee.length ? classes.error : ''}
                            id="assignee" 
                            type="text" 
                            placeholder="Assignee" 
                            value={enteredDetails.assignee} 
                            onChange={(e) => onChangeDetail('assignee', e)} 
                        />
                    </div>
                </div>
                <label htmlFor="priority">Priority</label>
                <select 
                    id="priority" 
                    name="priority" 
                    onChange={(e) => onChangeDetail('priority', e)}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <div className={classes["button-container"]}>
                    <Button>Add</Button>
                    <Button type="button" onClick={closeForm}>Cancel</Button>
                </div>
                { errors.isError && 
                    <div>
                        <p className={classes["error-msg"]}>Please enter all fields!</p>
                    </div> 
                }
            </form>
        </Container>
    );
};

export default TicketForm;