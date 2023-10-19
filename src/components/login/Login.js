import React, { useContext, useEffect, useReducer, useRef } from "react";

import Card from "../ui/card/Card";
import classes from "./Login.module.css";
import Button from "../ui/button/Button";
import AuthContext from "../../context/auth-context";
import { INITIAL_STATE, reducer } from "./config";
import Input from "../ui/input/Input";

const Login = () => {
  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();

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
    if (state.form.isValid) {
      authCtx.onLogin(state.email.value, state.password.value);
    } else if (!state.email.isValid) {
      emailRef.current.focus();
    } else if (!state.password.isValid) {
      passRef.current.focus();
    } else {
      console.log("Something's not right");
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id="email"
          type="email"
          label="E-Mail"
          value={state.email.value}
          isValid={state.email.isValid}
          onChange={onChangeHandler}
        />
        <Input
          ref={passRef}
          id="password"
          type="password"
          label="Password"
          value={state.password.value}
          isValid={state.password.isValid}
          onChange={onChangeHandler}
        />

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
