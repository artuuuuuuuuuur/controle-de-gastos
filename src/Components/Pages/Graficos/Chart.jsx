/* eslint-disable react/prop-types */
import { Bar, Pie } from "react-chartjs-2";

function Chart({ type, data, options, optionsBar, category }) {
  return (
    <div className="flex flex-col w-full max-w-2xl sm:max-w-md p-4">
      <h2 className="font-bold text-lg text-center mb-4">Por {category}</h2>

      <div className="w-full min-h-[300px]">
        {type ? (
          <Pie data={data} options={options} />
        ) : (
          <Bar data={data} options={optionsBar} />
        )}
      </div>
    </div>
  );
}

export default Chart;
