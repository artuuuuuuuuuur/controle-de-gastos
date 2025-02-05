/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ gastos }) {
  return (
    <div className="max-h-[500px] overflow-y-scroll">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#d1d1d1", fontWeight: "bold" }}>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gastos.map((gasto) => (
              <TableRow
                key={gasto.nome}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {gasto.nome}
                </TableCell>
                <TableCell align="right">
                  R${parseFloat(gasto.valor).toFixed(2).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {new Date(gasto.data).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">{gasto.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
