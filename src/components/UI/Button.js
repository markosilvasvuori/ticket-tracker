import classes from './Button.module.css';

const Button = props => {
    const styles = `${classes.button} ${props.className ? props.className : ''}`;

    return (
        <button 
            className={styles} 
            type={props.type} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;