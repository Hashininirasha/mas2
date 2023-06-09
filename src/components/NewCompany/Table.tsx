import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './Table.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';


const columns: GridColDef[] = [
  
  {
    field: 'paymethod',
    headerName: 'Payment Method',
    width: 220,
    renderHeader: () => <span className={styles.columnHeader}>Payment Method</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'bank',
    headerName: 'Bank',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>Bank</span>,
    renderCell: (params: GridCellParams) => (
        <span className={styles.cell}>{params.value as React.ReactNode}</span>
      ),
    },
  
  {
    field: 'beneficiary',
    headerName: 'Beneficiary Name',
    width: 220,
    renderHeader: () => <span className={styles.columnHeader}>Beneficiary Name</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },

  {
    field: 'id',
    headerName: 'Account Number',
    width: 230,
    renderHeader: () => <span className={styles.columnHeader} >Account Number</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>Action</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell} style={{paddingLeft: "15px"}}>
        <DeleteIcon className={styles.deleteIcon}/>
      </span>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>Status</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>
        <Switch defaultChecked checked={params.value as boolean} onChange={() => {}} />
      </span>
    ),
  },
];

const rows = [
  { id: 4562278121, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "BOC" },
  { id: 643126, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "BOC" },
  { id: 861532, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "BOC" },
  { id: 33456565, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha ', bank: "NSB" },
  { id: 8651, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha ', bank: "BOC" },
  { id: 846531, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "BOC" },
  { id: 3131, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha ', bank: "BOC" },
  { id: 541302, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha ', bank: "BOC" },
  { id: 520122, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "PP" },
  { id: 4524245, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha ' , bank: "BOC"},
  { id: 425445, paymethod: 'Cash', beneficiary: 'Lahiru Rajapaksha', bank: "BOC" },
];



export default function DataTable() {
  return (
    <div className={styles.table}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        className={styles.dataGrid}
         
      />
    </div>
  );
  
}