import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, price) {
  return {
    name, price,
  };
}

const financeFee = Math.round(Math.random() * 1000);
const optionFee = Math.round(Math.random() * 10000);
const totalFee = financeFee + optionFee;
const totalDays = Math.round(Math.random() * 10);
const rows = [
  createData('Finance fee', `${financeFee}`),
  createData('Option to purchase fee', `${optionFee}`),
  createData('Total ammount payable', `${totalFee}`),
  createData('Duration', `${totalDays}`),
];

export default function DetailsTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link
        className="menu_links"
        to="/reserve"
      >
        <Button
          className="btn-color"
          variant="contained"
          sx={{
            mt: { xs: '4rem' },
          }}
        >
          {' '}
          Reserve this Room
          
        </Button>
      </Link>
    </>
  );
}
