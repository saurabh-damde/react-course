const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableBody = (props) => {
  return (
    <tbody>
      <tr key={props.year}>
        <td>{props.year}</td>
        <td>{formatter.format(props.savings)}</td>
        <td>{formatter.format(props.interest)}</td>
        <td>
          {formatter.format(
            props.savings - props.initial - props.contribution * props.year
          )}
        </td>
        <td>
          {formatter.format(props.initial + props.contribution * props.year)}
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
