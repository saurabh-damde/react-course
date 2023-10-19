export const INITIAL_STATE = {
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

export const reducer = (state, action) => {
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
