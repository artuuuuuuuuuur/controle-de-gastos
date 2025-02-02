import NavBar from "../NavBar";

function AddGasto() {
  return (
    <div className="h-full max-h-full flex flex-col">
      <NavBar currentPage={"cadastro"} />
      <div className="bg-white grow overflow-auto rounded-3xl p-5">CADASTRAR GASTOS</div>
    </div>
  );
}

export default AddGasto;
