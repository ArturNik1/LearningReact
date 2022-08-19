import React, { useRef, useState } from "react";
import styles from "./AddUser.module.css";
import Button from "./UI/Button";
import Error from "./UI/Error";
import Card from "./UI/Card";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [idCounter, setIdCounter] = useState(0);
  const [error, setError] = useState(null);

  const errorHandler = (event) => {
    event.preventDefault();

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    setError(null);
  };

  const formSumbitHandler = (form) => {
    form.preventDefault();

    const userInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    if (userInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Username cant be empty",
      });
      return;
    }
    if (ageInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Age cant be empty",
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid Age",
        msg: "Age must be 1 or more",
      });
      return;
    }

    const newUser = {
      key: idCounter,
      username: userInput,
      age: ageInput,
    };

    setIdCounter((prevId) => prevId + 1);

    props.onAddUser(newUser);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <React.Fragment>
      {error && (
        <Error title={error.title} msg={error.msg} onConfirm={errorHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSumbitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id = "username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id = "age"
            type="number"
            ref={ageInputRef}
          ></input>
          <div>
            <Button type="sumbit" onFormSumbit={formSumbitHandler}>
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
