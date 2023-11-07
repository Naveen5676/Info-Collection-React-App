import './Infoinput.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorMessage from '../UI/ErrorMessage';

const Infoinput = (props) => {
  const [enteredUserValue, setEnteredUserValue] = useState('');
  const [enteredAgeValue, setEnteredAgeValue] = useState('');
   const [error , setError]=useState();

  function userInputChangeHandler(event) {
    setEnteredUserValue(event.target.value);
  }

  function ageInputChangeHandler(event) {
    setEnteredAgeValue(event.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    if(enteredAgeValue.trim().length ===0 || enteredUserValue.trim().length ===0){
        setError({
            title: 'Invalid input',
            message: 'please enter a valid name and age'
        });
        // alert('Please enter the username and age ')
        return;
    }

    if(enteredAgeValue<0){
        setError({
            title: 'Invalid age',
            message: 'please enter a valid age'
        });
        //alert('The age value is less than 0')
        return;
    }

    props.onAddUser(enteredUserValue, enteredAgeValue);
    setEnteredAgeValue('');
    setEnteredUserValue('');
  }

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {error && (
            <ErrorMessage  title={error.title}
            message ={error.message}
            onConfirm={errorHandler}/>
        )}
        <label>Username</label>
        <input type="text" value={enteredUserValue} onChange={userInputChangeHandler} />
        <label>Age (years)</label>
        <input type="number" value={enteredAgeValue} onChange={ageInputChangeHandler} />
      </div>
      <Button type='submit'>Add User</Button>
    </form>
  );
}

export default Infoinput;
