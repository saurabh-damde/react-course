import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.chartData.map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxVal={Math.max(...props.chartData.map((data) => data.value))}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
