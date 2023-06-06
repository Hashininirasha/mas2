import React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import styles from './Table.module.scss';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    width: 70,
    renderHeader: () => <span className={styles.columnHeader} >#</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'incident',
    headerName: 'Incident',
    width: 600,
    renderHeader: () => <span className={styles.columnHeader}>Incident</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    renderHeader: () => <span className={styles.columnHeader}>Date</span>,
    renderCell: (params: GridCellParams) => {
      const dateValue = new Date(params.value as string);
      const formattedDate = dateValue.toLocaleDateString(); 
  
      return <span className={styles.cell}>{formattedDate}</span>;
    },
  },
  
  {
    field: 'outcome',
    headerName: 'Outcome',
    width: 200,
    renderHeader: () => <span className={styles.columnHeader}>Outcome</span>,
    renderCell: (params: GridCellParams) => (
      <span className={styles.cell}>{params.value as React.ReactNode}</span>
    ),
  },
];

const rows = [
  { id: 1, date: new Date('2023-07-22'), incident: 'Jon', outcome: 'Driver' },
  { id: 2, date: new Date('2021-04-08'), incident: 'Cersei', outcome: 'Driver Suspended' },
  { id: 3, date: new Date('2021-04-10'), incident: 'Jaime', outcome: 'Driver Allocated' },
  { id: 4, date: new Date('2020-10-08'), incident: 'Arya', outcome: 'Driver Suspended' },
  { id: 5, date: new Date('2021-06-18'), incident: 'Daenerys', outcome: 'Driver Allocated' },
  { id: 6, date: new Date('2020-12-30'), incident: 'Arya', outcome: 'Driver' },
  { id: 7, date: new Date('2021-05-10'), incident: 'Ferrara', outcome: 'Driver Suspended' },
  { id: 8, date: new Date('2020-01-08'), incident: 'Rossini', outcome: 'Driver Suspended' },
  { id: 9, date: new Date('2020-11-26'), incident: 'Charvey', outcome: 'Driver' },
  { id: 10, date: new Date('2021-02-08'), incident: 'Bharvey', outcome: 'Driver Suspended' },
  { id: 11, date: new Date('2021-05-18'), incident: 'Aharvey', outcome: 'Driver' },
];



export default function DataTable() {
  return (
    <div className={styles.table} style={{ height: 370, width: '100%' }}>
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