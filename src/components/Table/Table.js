import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import style from "./Table.module.css";

const Table = (props) => {
  return (
    <table className={style.result}>
      <TableHeader />
      {props.data.map((data) => (
        <TableBody
          key={data.year}
          year={data.year}
          interest={data.yearlyInterest}
          savings={data.savingsEndOfYear}
          contribution={data.yearlyContribution}
          initial={props.initial}
        />
      ))}
    </table>
  );
};

export default Table;
