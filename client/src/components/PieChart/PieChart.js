import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({work, fun, chores, family, sleep, unknown}) => {
  const data = {
    labels: ["Work", "Fun", "Chores", "Family", "Sleep", "Unknown"],
    datasets: [
      {
        data: [work, fun, chores, family, sleep, unknown],
        backgroundColor: ["#70FF86", "#FF70E9", "#80B5FF", "#FFCA80", "#FF7A7A"],
      }
    ]
  };

  return (
    <div>
      <Pie data={data} width={400} />
    </div>
  );
};

export default PieChart;
