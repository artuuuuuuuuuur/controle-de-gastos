import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { addGasto, getGastos } from "../../api";

function AddGasto() {
  const [gastos, setGastos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    data: "",
    categoria: "",
  });

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Cadastra novo gasto no backend
  const listarGastos = async (e) => {
    e.preventDefault();

    try {
      // Envia o gasto corretamente como um objeto (sem array)
      const newGasto = await addGasto(form);

      // Atualiza a lista no frontend
      setGastos([...gastos, newGasto]);

      // Limpa o formulário
      setForm({ nome: "", valor: "", data: "", categoria: "" });
    } catch (error) {
      console.error(
        "Erro ao adicionar gasto:",
        error.response?.data || error.message
      );
    }
  };

  // Busca os gastos ao carregar a página (apenas 1 vez)
  useEffect(() => {
    getGastos().then(setGastos).catch(console.error);
  }, []);

  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"cadastro"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        <section>
          <h1>Cadastrar Gastos</h1>
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
                <option value="Etc">Etc</option>
              </select>
            </label>
            <button
              className=""
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>

        <section className="mt-4">
          <h1>Lista de Gastos</h1>
          <ul className="">
            {gastos.map((gasto, index) => (
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
