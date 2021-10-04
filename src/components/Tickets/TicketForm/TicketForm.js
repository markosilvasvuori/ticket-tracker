import { useState } from 'react';

import Container from '../../Layout/Container';
import Button from '../../UI/Button';
import classes from './TicketForm.module.css';

const TicketForm = () => {
    const [enteredDetails, setEnteredDetails] = useState({
        title: '',
        description: '',
        reporter: '',
        assignee: '',
        date: '',
        priority: ''
    });

    const addTicket = (e) => {
        e.preventDefault();
        console.log('ADD');
    };

    const onChangeTitle = (e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                title: e.target.value
            }
        });
    };

    const onChangeDescription = (e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                description: e.target.value
            }
        });
    };

    const onChangeReporter = (e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                reporter: e.target.value
            }
        });
    };

    const onChangeAssignee = (e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                assignee: e.target.value
            }
        });
    };

    const onChangePriority = (e) => {
        setEnteredDetails(prevDetails => {
            return {
                ...prevDetails,
                priority: e.target.value
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
    
    return (
        <Container>
            <form className={classes.form} onSubmit={addTicket}>
                <label htmlFor="title">Title</label>
                <input 
                    id="title" type="text" 
                    placeholder="Title" 
                    value={enteredDetails.title} 
                    onChange={onChangeTitle} 
                />
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description" 
                    placeholder="Description" 
                    value={enteredDetails.description} 
                    onChange={onChangeDescription} 
                />
                <div className={classes.names}>
                    <div>
                        <label htmlFor="reporter">Reporter</label>
                        <input 
                            id="reporter" 
                            type="text" 
                            placeholder="Reporter" 
                            value={enteredDetails.reporter} 
                            onChange={onChangeReporter} 
                        />
                    </div>
                    <div>
                        <label htmlFor="assignee">Assignee</label>
                        <input 
                            id="assignee" 
                            type="text" 
                            placeholder="Assignee" 
                            value={enteredDetails.assignee} 
                            onChange={onChangeAssignee} 
                        />
                    </div>
                </div>
                <label htmlFor="priority">Priority</label>
                <select 
                    id="priority" 
                    name="priority" 
                    onChange={onChangePriority}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <Button>Add</Button>
            </form>
        </Container>
    );
};

export default TicketForm;