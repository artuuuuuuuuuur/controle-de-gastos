// eslint-disable-next-line react/prop-types
function NavBar({ currentPage }) {
  return (
    <nav className="w-full px-14 py-1 bg-gray-300 -mb-1">
      <ul className="flex">
        <li
          className={
            currentPage == "cadastro"
              ? "bg-white px-5 py-2 rounded-t-2xl font-bold"
              : "px-5 py-2"
          }
        >
          <a href="/">Cadastrar Gastos</a>
        </li>
        <li
          className={
            currentPage == "grafico"
              ? "bg-white px-5 py-2 rounded-t-2xl font-bold"
              : "px-5 py-2"
          }
        >
          <a href="/grafico">Gráfico</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
