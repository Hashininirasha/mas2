import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Switch from '@mui/material/Switch';
import styles from './Table.module.scss';


function createData(
  
  paymethod: string,
  bank: string,
  beneficiary: string,
  accnum: number,
  status: boolean = false
) {
  return { paymethod, bank, beneficiary, accnum, status };
}

const initialRows = [
  createData("Cash", "BOC", "Lahiru Rajapaksha", 313144632, true),
  createData("Cash", "PP", "Lahiru Rajapaksha", 465235, false),
  createData("Cash", "Commercial Bank","Lahiru Rajapaksha", 56415, true),
  createData("Cash", "NDB", "Lahiru Rajapaksha", 8645136, true),
  createData("Cash", "BOC", "Lahiru Rajapaksha", 465313153, false),
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

  const handleDelete = (accnum: number) => {
    const updatedRows = rows.filter(row => row.accnum !== accnum);
    setRows(updatedRows);
  };

  const handleSwitchChange = (accnum: number) => {
    const updatedRows = rows.map((row) =>
      row.accnum === accnum ? { ...row, status: !row.status } : row
    );
    setRows(updatedRows);
  };
  
  

  return (

    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" className={styles.table}>
        <TableHead >
          <TableRow className={styles.tableHeader}>
           
            <TableCell>
              <TableSortLabel 
                active={orderBy === 'paymethod'}
                direction={orderBy === 'paymethod' ? order : undefined}
                onClick={() => handleSortRequest('paymethod')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
                Payment Method
              </TableSortLabel>
              </TableCell>
              <TableCell>
              <TableSortLabel
                active={orderBy === 'bank'}
                direction={orderBy === 'bank' ? order : undefined}
                onClick={() => handleSortRequest('bank')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                Bank
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'beneficiary'}
                direction={orderBy === 'beneficiary' ? order : undefined}
                onClick={() => handleSortRequest('beneficiary')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                Beneficiary Name
              </TableSortLabel>
            </TableCell>

            <TableCell>
            <TableSortLabel
                active={orderBy === 'accnum'}
                direction={orderBy === 'accnum' ? order : undefined}
                onClick={() => handleSortRequest('accnum')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                Account Number
              </TableSortLabel>
            </TableCell>
            <TableCell className={styles.tableHeader}>Actions</TableCell>
            <TableCell className={styles.tableHeader}>Status</TableCell>
 

          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.accnum}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell className={styles.table}>{row.paymethod}</TableCell>
              <TableCell className={styles.table}>{row.bank}</TableCell>
              <TableCell className={styles.table}>{row.beneficiary}</TableCell>
              <TableCell component="th" scope="row" className={styles.table}>
                {row.accnum}
              </TableCell>
              <TableCell>
                <DeleteIcon onClick={() => handleDelete(row.accnum)} className={styles.tableIcon}>Delete</DeleteIcon>
                </TableCell>
                <TableCell>
                <Switch
                    checked={row.status}
                    onChange={() => handleSwitchChange(row.accnum)}
                    className={styles.tableIcon}
                  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

