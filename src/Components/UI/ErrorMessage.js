import './ErrorMessage'
import Button from './Button';
import classes from './ErrorMessage.css'

const ErrorMessage=(props)=>{
return (
    <div>
         <div className={classes.backdrop} onClick={props.onConfirm} />
     
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>

    </div>
);
}

export default ErrorMessage