/* eslint-disable react/prop-types */
import NavBar from "../../NavBar";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import processarDados from "./processarDados";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function Graficos({ gastosArray }) {
  const data = processarDados(gastosArray);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Distribuição dos Gastos",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"grafico"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        <h1 className="text-xl font-bold mb-4">Gastos por Categoria</h1>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Graficos;
