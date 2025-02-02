const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let gastos = []; // Array em memória (poderia ser salvo num banco)

// Endpoint para listar gastos
app.get("/gastos", (req, res) => {
  res.json(gastos);
});

// Endpoint para adicionar um gasto
app.post("/gastos", (req, res) => {
  const { nome, valor, data, categoria } = req.body;
  if (!nome || !valor || !data || !categoria) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }
  const newGasto = { id: gastos.length + 1, nome, valor, data, categoria };
  gastos.push(newGasto);
  res.json(newGasto);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
