/* eslint-disable react/prop-types */
import { Bar, Pie } from "react-chartjs-2";

function Chart({ type, data, options, optionsBar, category }) {
  return (
    <>
      <>
        <h2>Por {category}</h2>

        {type ? (
          <Pie data={data} options={options} />
        ) : (
          <Bar options={optionsBar} data={data} />
        )}
      </>
    </>
  );
}

export default Chart;
