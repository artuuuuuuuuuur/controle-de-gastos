import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddGasto from "./Components/Pages/AddGasto";
import Graficos from "./Components/Pages/Graficos";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-300 p-10 h-screen">
        <Routes>
          <Route index element={<AddGasto />} />
          <Route path="grafico" element={<Graficos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

