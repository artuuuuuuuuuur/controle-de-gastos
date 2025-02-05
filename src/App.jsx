import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddGasto from "./Components/Pages/AddGasto/AddGasto";
import Graficos from "./Components/Pages/Graficos/Graficos";
import { useEffect, useState } from "react";
import { getGastos } from "./api";

function App() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    getGastos().then(setGastos).catch(console.error);
  }, [gastos]);

  return (
    <BrowserRouter>
      <div className="bg-gray-300 p-10 h-screen">
        <Routes>
          <Route index element={<AddGasto gastosArray={gastos} />} />
          <Route path="grafico" element={<Graficos gastosArray={gastos} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
