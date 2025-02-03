const processarDados = (gastos) => {
  if (!gastos || gastos.length === 0) {
    return {
      labels: ["Sem dados"],
      datasets: [
        {
          data: [1],
          backgroundColor: ["#ccc"],
        },
      ],
    };
  }

  const categorias = {};
  gastos.forEach((gasto) => {
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
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
        ],
      },
    ],
  };
};

export default processarDados;