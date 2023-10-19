import React, { useEffect, useReducer } from "react";

import Card from "../ui/card/Card";
import classes from "./Login.module.css";
import Button from "../ui/button/Button";

const Login = (props) => {
  const INITIAL_STATE = {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    form: {
      value: "",
      isValid: false,
    },
  };

  const reducer = (state, action) => {
    if (action.type === "email") {
      return {
        email: {
          value: action.value,
          isValid: action.value.includes("@"),
        },
        password: state.password,
        form: state.form,
      };
    } else if (action.type === "password") {
      return {
        email: state.email,
        password: {
          value: action.value,
          isValid: action.value.trim().length,
        },
        form: state.form,
      };
    } else if (action.type === "form") {
      return {
        email: state.email,
        password: state.password,
        form: {
          isValid: state.email.isValid && state.password.isValid,
        },
      };
    } else {
      console.log("Something's not right");
    }
    return INITIAL_STATE;
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: "form",
        isValid: state.email.isValid && state.password.isValid,
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [state.email.isValid, state.password.isValid]);

  const onChangeHandler = (action, value) => {
    if (action === "email") {
      dispatch({ type: "email", value: value });
    } else if (action === "password") {
      dispatch({ type: "password", value: value });
    } else {
      console.log("Something's not right");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.email.value, state.password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.email.value}
            onChange={(event) => onChangeHandler("email", event.target.value)}
            onBlur={() => state.email.isValid}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password.value}
            onChange={(event) =>
              onChangeHandler("password", event.target.value)
            }
            onBlur={() => state.password.isValid}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!state.form.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
