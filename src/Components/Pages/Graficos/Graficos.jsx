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
import processarDados from "./processarDados";
import { Switch } from "@mui/material";
import { useState } from "react";
import Chart from "./Chart";

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
  const [type, setType] = useState(true);
  const { categoriasData, nomesData, mesesData } = processarDados(gastosArray);

  const options = [
    {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
    {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  ];

  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"grafico"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        <div className="flex justify-between flex-wrap ">
          <h1 className="text-3xl font-bold">Seus gastos</h1>
          <span className="text-lg">
            Gráfico de Colunas
            <Switch onClick={() => setType(!type)} defaultChecked />
            Gráfico de Pizza
          </span>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <Chart
            data={categoriasData}
            options={options}
            type={type}
            category={"categoria"}
            optionsBar={options[1]}
          />
          <Chart
            data={nomesData}
            options={options}
            type={type}
            category={"nomes"}
            optionsBar={options[1]}
          />
          <Chart
            data={mesesData}
            options={options}
            type={type}
            category={"mês"}
            optionsBar={options[1]}
          />
        </div>
      </div>
    </div>
  );
}

export default Graficos;
