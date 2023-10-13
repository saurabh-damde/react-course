import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
  const initial = {
    username: "",
    age: "",
  };

  const [error, setError] = useState();

  const [userInput, setUserInput] = useState(initial);

  const onChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Name & Age (Non-Empty Values)",
      });
      return;
    } else if (+userInput.age <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Age (Greater than Zero)",
      });
      return;
    }
    props.getUser(userInput);
    setUserInput(initial);
  };

  const onClear = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal errorData={error} clear={onClear} />}

      <Card class={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userInput.username}
            onChange={(event) =>
              onChangeHandler("username", event.target.value)
            }
          />
          <label htmlFor="age">Age (Yrs)</label>
          <input
            id="age"
            type="number"
            value={userInput.age}
            onChange={(event) => onChangeHandler("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
