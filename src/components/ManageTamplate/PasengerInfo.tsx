import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import style from './Pasenger.module.scss'

function createData(name: string) {
  return { name };
}

const rows = [
  createData('Yohani'),
  createData('Sajana'),
  createData('Amal'),
  createData('Sajan'),
  // Add more rows if needed
];

export default function PassengerInfo() {
  const renderedRows = [];
  let currentRow = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    currentRow.push(
      
      <TableCell key={row.name} align="right" className={style.tablecell}>
        <Box display="flex" alignItems="center">
          <KeyboardArrowRightIcon className={style.arrow}  />
          <span>{row.name}</span>
        </Box>
      </TableCell>
    );

    // If three items have been added to the current row or it's the last row
    if (currentRow.length === 3 || i === rows.length - 1) {
      renderedRows.push(
        <TableRow
        
          key={`row-${i}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {currentRow}
        </TableRow>
      );

      currentRow = [];
    }
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 200, '&:last-child td, &:last-child th': { border: 0 } }} aria-label="simple table">
        <TableBody>{renderedRows}</TableBody>
      </Table>
    </TableContainer>
  );
}
