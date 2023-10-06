import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const [day, month, year] = [
    props.date.toLocaleString("en-US", { day: "2-digit" }),
    props.date.toLocaleString("en-US", { month: "long" }),
    props.date.getFullYear(),
  ];
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
