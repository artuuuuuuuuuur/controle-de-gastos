/* eslint-disable react/prop-types */
import NavBar from "../../NavBar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import processarDados from "./processarDados"

ChartJS.register(ArcElement, Tooltip, Legend);

function Graficos({ gastosArray }) {
  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"grafico"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        <h1 className="text-xl font-bold mb-4">Gastos por Categoria</h1>
        <Doughnut data={processarDados(gastosArray)} />
      </div>
    </div>
  );
}

export default Graficos;
