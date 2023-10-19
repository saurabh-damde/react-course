import React, { useContext, useEffect, useReducer } from "react";

import Card from "../ui/card/Card";
import classes from "./Login.module.css";
import Button from "../ui/button/Button";
import AuthContext from "../../context/auth-context";
import { INITIAL_STATE, reducer } from "./config";

const Login = () => {
  const authCtx = useContext(AuthContext);

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
    authCtx.onLogin(state.email.value, state.password.value);
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
