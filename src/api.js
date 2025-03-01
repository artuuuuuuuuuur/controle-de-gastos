import axios from "axios";

const API_URL = "https://controle-de-gastos-jjiw.onrender.com/gastos";

export const getGastos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addGasto = async (gasto) => {
  const res = await axios.post(API_URL, gasto);
  return res.data;
};
