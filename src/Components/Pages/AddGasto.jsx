import { useEffect, useState } from "react";
import NavBar from "../NavBar";

function AddGasto() {
  const [gastos, setGastos] = useState([]);

  function listarGastos(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;
    const categoria = document.getElementById("categoria").value;

    const newGasto = [
      { nome: nome, valor: valor, data: data, categoria: categoria },
    ];
    setGastos([...gastos, newGasto[0]]);
  }
  
  useEffect(() => {
    console.log(gastos);
  }, [gastos]);

  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"cadastro"} />
      <section className="bg-white grow overflow-auto rounded-3xl p-5">
        <h1>Cadastrar Gastos</h1>
        <form className="" onSubmit={listarGastos}>
          <label className="pr-2">
            Nome:
            <input
              className="border"
              type="text"
              name="nome"
              id="nome"
              required
            />
          </label>
          <label className="pr-2">
            Valor:
            <input
              className="border"
              type="number"
              name="nome"
              id="valor"
              required
            />
          </label>
          <label className="pr-2">
            Dia do Pagamento:
            <input
              className="border"
              type="date"
              name="nome"
              id="data"
              required
            />
          </label>
          <label className="pr-2">
            Categoria:
            <select className="border" name="nome" id="categoria" required>
              <option value="" disabled selected>
                Selecione uma categoria
              </option>
              <option value="Curso">Curso</option>
              <option value="Curso">Streaming</option>
              <option value="Curso">Etc</option>
            </select>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section>
        <h1>Lista de gastos</h1>
        {
          gastos.map((gasto)  =>
            <span key={gasto.key}>Gasto: {gasto.nome}</span>
          )
        }
      </section>
    </div>
  );
}

export default AddGasto;
