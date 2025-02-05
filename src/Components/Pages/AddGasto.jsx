/* eslint-disable react/prop-types */
import { useState } from "react";
import NavBar from "../NavBar";
import { addGasto } from "../../api";

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
        <section>
          <h1>Cadastrar Gastos</h1>
            <span>
            Quanto você gastou: R${totalGastos}
            </span>
          <form className="" onSubmit={listarGastos}>
            <label className="block">
              Nome:
              <input
                className="border"
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              Valor:
              <input
                className="border"
                type="number"
                name="valor"
                value={form.valor}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              Dia do Pagamento:
              <input
                className="border"
                type="date"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              Categoria:
              <select
                className="border"
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
                <option value="Outro">Outro</option>
              </select>
            </label>
            <button className="" type="submit">
              Enviar
            </button>
          </form>
        </section>

        <section className="mt-4">
          <h1>Lista de Gastos</h1>
          <ul className="">
            {gastosArray.map((gasto, index) => (
              <li key={index} className="mt-1">
                <strong>{gasto.nome}</strong> - R${gasto.valor} - {gasto.data} -{" "}
                {gasto.categoria}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AddGasto;
