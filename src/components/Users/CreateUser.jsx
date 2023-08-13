import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreateUser.module.css"
import React,{ useState, useRef } from "react";

const CreateUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title:'Иди нахуй Нурик',
                message: 'Пошел нахуй Нурик'
            })
            return;
        }
        if (+inputAge < 1){
            setError({
                title:'Иди нахуй Нурик',
                message: 'ПИДР нахуй Нурик'
            })
            return;
        }
        props.onCreateUser(inputName, inputAge);       
        setInputName('');
        setInputAge('');
    }
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    const errorHandler = (props) => {
        setError(false);
    };

  return (
    <React.Fragment>
        {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
        <Card className={styles.formochka}>
        <form onSubmit={createUserHandler}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" onChange={nameChangeHandler} value={inputName} ref={nameInputRef}/>
            <label htmlFor="age">Возраст</label>
            <input id="age" type="number" min="0" onChange={ageChangeHandler} value={inputAge} ref={ageInputRef}/>
            <Button type="submit">Submit</Button>
        </form>
         </Card>
    </React.Fragment>

  )
}
export default CreateUser