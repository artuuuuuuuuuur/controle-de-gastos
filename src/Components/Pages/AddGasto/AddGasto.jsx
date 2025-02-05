/* eslint-disable react/prop-types */
import { useState } from "react";
import NavBar from "../../NavBar";
import { addGasto } from "../../../api";
import BasicTable from "./Table";

function AddGasto({ gastosArray }) {
  const [gastos, setGastos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    data: "",
    categoria: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalGastos = gastosArray.reduce(
    (total, gasto) => total + parseFloat(gasto.valor),
    0
  );

  const listarGastos = async (e) => {
    e.preventDefault();

    try {
      const newGasto = await addGasto(form);
      setGastos([...gastos, newGasto]);
      setForm({ nome: "", valor: "", data: "", categoria: "" });
    } catch (error) {
      console.error(
        "Erro ao adicionar gasto:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"cadastro"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        <section className="gap-6 flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Cadastrar Gastos</h1>
            <span className="text-xl">
              Quanto você gastou:
              <span className="text-red-800 font-bold">
                {" "}
                R${" " + totalGastos}
              </span>
            </span>
          </div>

          <form className="flex flex-wrap gap-5" onSubmit={listarGastos}>
            <label className="gap-2 flex">
              <span className="w-full self-center">Nome:</span>
              <input
                className="border border-gray-400 rounded-2xl px-2"
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </label>
            <label className="gap-2 flex">
              <span className="w-full self-center">Valor:</span>
              <input
                className="border border-gray-400 rounded-2xl px-2"
                type="number"
                name="valor"
                value={form.valor}
                onChange={handleChange}
                required
              />
            </label>
            <label className="gap-2 flex">
              <span className="w-full self-center">Dia do Pagamento:</span>
              <input
                className="border border-gray-400 rounded-2xl px-2"
                type="date"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
              />
            </label>
            <label className="gap-2 flex">
              <span className="w-full self-center">Categoria:</span>
              <select
                className="border border-gray-400 rounded-2xl px-2"
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="Curso">Curso</option>
                <option value="Streaming">Streaming</option>
                <option value="Transporte">Transporte</option>
                <option value="Lazer">Lazer</option>
                <option value="Contas">Contas</option>
                <option value="Saúde">Saúde</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Outro">Outro</option>
              </select>
            </label>
            <button
              className="w-full lg:w-3xs border-3 bg-green-400 border-green-800 py-1 px-4 rounded-4xl font-bold hover:text-green-500 hover:bg-white transition"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-gray-600">Lista de Gastos</h2>
          <BasicTable gastos={gastosArray} />
        </section>
      </div>
    </div>
  );
}

export default AddGasto;
