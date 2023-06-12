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
import styles from './TableREcinci.module.scss'

function createData(
  id: number,
  sbu: string,
  from: Date,
  to: Date,
  
 
) {
  return { id, sbu, from, to};
}

const initialRows = [
  createData(1, "MAS Kreeda",new Date('2023-07-22'), new Date('2023-07-23')),
  createData(2, "MAS Intima", new Date('2021-04-08'), new Date('2021-04-10') ),
  createData(3, "MAS Kreeda", new Date('2021-04-10'), new Date('2021-04-11')),
  createData(4, "MAS Kreeda", new Date('2020-10-08'), new Date('2020-10-10') ),
  createData(5, "MAS Intima", new Date('2021-06-18'), new Date('2021-06-18')),
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
                active={orderBy === 'sbu'}
                direction={orderBy === 'sbu' ? order : undefined}
                onClick={() => handleSortRequest('sbu')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
                
              >
              SBU
              </TableSortLabel>
              </TableCell>
              <TableCell>
              <TableSortLabel
                active={orderBy === 'from'}
                direction={orderBy === 'from' ? order : undefined}
                onClick={() => handleSortRequest('from')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                From
              </TableSortLabel>
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={orderBy === 'to'}
                direction={orderBy === 'to' ? order : undefined}
                onClick={() => handleSortRequest('to')}
                IconComponent={() => <SortByAlphaIcon className={styles.alphaaicon} />}
                className={styles.tableHeader}
              >
                To
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
              <TableCell className={styles.table}>{row.sbu}</TableCell>
              <TableCell className={styles.table}>{row.from.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>

              <TableCell className={styles.table}>{row.to.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>

           
      
                
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

