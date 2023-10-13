import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const initialInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialInput);

  const onChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.calculator(userInput);
  };

  const onResetHandler = (event) => {
    event.preventDefault();
    setUserInput(initialInput);
  };

  return (
    <form
      className={style.form}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
    >
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(event) =>
              onChangeHandler("currentSavings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(event) =>
              onChangeHandler("yearlyContribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeHandler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) =>
              onChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
