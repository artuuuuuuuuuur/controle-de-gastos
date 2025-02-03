export default function processarDados(gastosArray) {
  if (!gastosArray || gastosArray.length === 0) {
    return {
      labels: [],
      datasets: [],
    };
  }

  const categorias = {};

  gastosArray.forEach((gasto) => {
    if (categorias[gasto.categoria]) {
      categorias[gasto.categoria] += parseFloat(gasto.valor);
    } else {
      categorias[gasto.categoria] = parseFloat(gasto.valor);
    }
  });

  return {
    labels: Object.keys(categorias),
    datasets: [
      {
        data: Object.values(categorias),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        borderColor: "#ccc",
        borderWidth: 1,
      },
    ],
  };
}
