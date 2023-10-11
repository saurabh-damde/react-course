import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();

  const selectedYear = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={filteredYear} onChangeYear={selectedYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
