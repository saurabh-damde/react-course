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
        {props.expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
      </Card>
    </div>
  );
};
export default Expenses;
