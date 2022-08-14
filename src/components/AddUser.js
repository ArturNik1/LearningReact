import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "./UI/Button";
import Error from "./UI/Error";
import Card from "./UI/Card";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [idCounter, setIdCounter] = useState(0);
  const [error, setError] = useState(null);

  const usernameChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandler = (event) => {
    event.preventDefault();

    setUserInput('');
    setAgeInput('');

    setError(null);
  };

  const formSumbitHandler = (form) => {
    form.preventDefault();

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

    setUserInput("");
    setAgeInput("");
  };

  return (
    <div>
      {error && (
        <Error title={error.title} msg={error.msg} onConfirm={errorHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSumbitHandler}>
          <div>Username</div>
          <input
            type="text"
            value={userInput}
            onChange={usernameChangeHandler}
          ></input>
          <div>Age (years)</div>
          <input
            type="number"
            value={ageInput}
            onChange={ageChangeHandler}
          ></input>
          <div>
            <Button type="sumbit" onFormSumbit={formSumbitHandler}>
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
