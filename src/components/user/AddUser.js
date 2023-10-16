import React, { useState, useRef } from "react";
import style from "./AddUser.module.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
  const username = useRef();
  const userage = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const [name, age] = [username.current.value, userage.current.value];
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Name & Age (Non-Empty Values)",
      });
      return;
    } else if (+age <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Age (Greater than Zero)",
      });
      return;
    }
    props.getUser({ name, age });
    [username.current.value, userage.current.value] = ["", ""];
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
          <input id="username" type="text" ref={username} />
          <label htmlFor="age">Age (Yrs)</label>
          <input id="age" type="number" ref={userage} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
