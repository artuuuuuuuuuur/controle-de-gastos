function processarDados(gastosArray) {
  if (!gastosArray || gastosArray.length === 0) {
    return {
      categoriasData: { labels: [], datasets: [] },
      nomesData: { labels: [], datasets: [] },
      mesesData: { labels: [], datasets: [] },
    };
  }

  const categorias = {};
  const nomes = {};
  const meses = {};

  gastosArray.forEach((gasto) => {
    categorias[gasto.categoria] =
      (categorias[gasto.categoria] || 0) + parseFloat(gasto.valor);
  });

  gastosArray.forEach((gasto) => {
    nomes[gasto.nome] = (nomes[gasto.nome] || 0) + parseFloat(gasto.valor);
  });

  gastosArray.forEach((gasto) => {
    const data = new Date(gasto.data);
    const mesAno = data.toLocaleString("pt-BR", {
      month: "long",
      year: "numeric",
    });

    meses[mesAno] = (meses[mesAno] || 0) + parseFloat(gasto.valor);
  });

  const cores = [
    "#ff6384",
    "#36a2eb",
    "#ffce56",
    "#4CAF50",
    "#9C27B0",
    "#FF9800",
    "#E91E63",
    "#2196F3",
    "#8BC34A",
    "#FFC107",
    "#795548",
  ];

  return {
    categoriasData: {
      labels: Object.keys(categorias),
      datasets: [
        {
          label: "Gastos em R$",
          data: Object.values(categorias),
          backgroundColor: cores.slice(0, Object.keys(categorias).length),
          borderColor: cores.slice(0, Object.keys(categorias).length),
          borderWidth: 1,
        },
      ],
    },

    nomesData: {
      labels: Object.keys(nomes),
      datasets: [
        {
          label: "Gastos em R$",
          data: Object.values(nomes),
          backgroundColor: cores.slice(0, Object.keys(nomes).length),
          borderColor: cores.slice(0, Object.keys(nomes).length),
          borderWidth: 1,
        },
      ],
    },
    mesesData: {
      labels: Object.keys(meses),
      datasets: [
        {
          label: "Gastos em R$",
          data: Object.values(meses),
          backgroundColor: cores.slice(0, Object.keys(meses).length),
          borderColor: cores.slice(0, Object.keys(meses).length),
          borderWidth: 1,
        },
      ],
    },
  };
}

export default processarDados;
