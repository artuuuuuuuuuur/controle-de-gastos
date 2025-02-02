import NavBar from "../NavBar";

function Graficos() {
  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"grafico"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">
        VISUALIZAR GRAFICOS
      </div>
    </div>
  );
}

export default Graficos;
