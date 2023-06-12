import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import styles from './TableAssign.module.scss'

function createData(
  id: number,
  vehitype: string,
  vehiNum: string,
  sbu: string,
  
 
) {
  return { id, vehitype, vehiNum, sbu};
}

const initialRows = [
  createData(1, "Car", "GBH 4521", "MAS Kreeda"),
  createData(2, "Van", "GBH 4521", "MAS Kreeda" ),
  createData(3, "Car", "GBH 4521", "MAS Kreeda"),
  createData(4, "Car", "GBH 4521", "MAS Kreeda" ),
  createData(5, "Van", "GBH 4521", "MAS Kreeda"),
];

export default function DataTable() {
  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState<'asc' | 'desc' | undefined>(undefined);
  const [rows, setRows] = React.useState(initialRows);

  const handleSortRequest = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedRows = React.useMemo(() => {
    const comparator = (a: any, b: any) => {
      if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    };

    if (orderBy) {
      return [...rows].sort(comparator);
    }
    return rows;
  }, [orderBy, order, rows]);


  

  return (

    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" className={styles.table}>
        <TableHead >
          <TableRow className={styles.tableHeader}>

          <TableCell>
            <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : undefined}
                onClick={() => handleSortRequest('id')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                #
              </TableSortLabel>
            </TableCell>
           
            <TableCell>
              <TableSortLabel 
                active={orderBy === 'vehitype'}
                direction={orderBy === 'vehitype' ? order : undefined}
                onClick={() => handleSortRequest('vehitype')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
              Vehicle Type
              </TableSortLabel>
              </TableCell>

              <TableCell>
              <TableSortLabel 
                active={orderBy === 'vehiNum'}
                direction={orderBy === 'vehiNum' ? order : undefined}
                onClick={() => handleSortRequest('vehiNum')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
              Vehicle Number
              </TableSortLabel>
              </TableCell>

              <TableCell>
              <TableSortLabel 
                active={orderBy === 'sbu'}
                direction={orderBy === 'sbu' ? order : undefined}
                onClick={() => handleSortRequest('sbu')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
              SBU/Plant
              </TableSortLabel>
              </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell component="th" scope="row" className={styles.table}>
                {row.id}
              </TableCell>
              <TableCell className={styles.table}>{row.vehitype}</TableCell>
              <TableCell className={styles.table}>{row.vehiNum}</TableCell>
              <TableCell className={styles.table}>{row.sbu}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
