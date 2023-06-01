
import { Box, Button, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { EditOutlined } from '@mui/icons-material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React from 'react'
import { StyledTableCell } from '../../../assets/theme/theme';
import style from './ViewRequests.module.scss'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../utilities/constants';


const ViewRequests = () => {
  const navigate = useNavigate()

  const handleNewRequest = () => {

    navigate(APP_ROUTES.NEW_REQUEST)
  }
  return (
    <section className={style.gridContainer}>
          <div className={style.gridHeader}>
            <Typography
              noWrap
              component="div"
              className={style.gridTitle}
            >
              <h3>Transport Requests</h3>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <Button className={style.gridActionButton} variant="contained">
                <div className='layout-row'>
                  <AddIcon className={style.icon} />
                  <div onClick={() => {
                          handleNewRequest();
                          console.log('New Request clicked.');
                        }}>
                          New Request
                        </div>
                  
                </div>
              </Button>
            </div>
          </div>

          <TableContainer component={Paper} className={style.grid}>
            <Table className={style.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell width={120}>Request ID</StyledTableCell>
                  <StyledTableCell width={120} >Request Type</StyledTableCell>
                  <StyledTableCell width={180} >Create date and time</StyledTableCell>
                  <StyledTableCell width={100} >status</StyledTableCell>
                  <StyledTableCell width={100} >VIP trip</StyledTableCell>
                  <StyledTableCell width={100} >From</StyledTableCell>
                  <StyledTableCell width={180} >To (Main Destination)</StyledTableCell>
                  <StyledTableCell width={200} >Departure date and time</StyledTableCell>
                  <StyledTableCell width={180} >Return date and time</StyledTableCell>
                  <StyledTableCell width={150} >Passengers</StyledTableCell>
                  <StyledTableCell width={150} >Preferred Vehicle</StyledTableCell>
                  <StyledTableCell width={120} >Package</StyledTableCell>
                  <StyledTableCell width={180} >Total CBM of Package</StyledTableCell>
                  <StyledTableCell width={100} >Purpose</StyledTableCell>
                  <StyledTableCell width={100}>Approver</StyledTableCell>
                  <StyledTableCell width={150} className={style.actionColumn}>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell >Request ID</StyledTableCell>
                  <StyledTableCell >Request Type</StyledTableCell>
                  <StyledTableCell >Create date and time</StyledTableCell>
                  <StyledTableCell >status</StyledTableCell>
                  <StyledTableCell >VIP trip</StyledTableCell>
                  <StyledTableCell >From</StyledTableCell>
                  <StyledTableCell >To (Main Destination)</StyledTableCell>
                  <StyledTableCell >Departure date and time</StyledTableCell>
                  <StyledTableCell >Return date and time</StyledTableCell>
                  <StyledTableCell >Passengers</StyledTableCell>
                  <StyledTableCell >Preferred Vehicle</StyledTableCell>
                  <StyledTableCell >Package</StyledTableCell>
                  <StyledTableCell >Total CBM of Package</StyledTableCell>
                  <StyledTableCell >Purpose</StyledTableCell>
                  <StyledTableCell >Approver</StyledTableCell>
                  <StyledTableCell className={style.actionColumn} style={{ backgroundColor: '#282828' }}>
                    <Box className='layout-row'>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="View">
                            <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="Edit">
                            <EditOutlined sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="Delete">
                            <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                    </Box>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
           
          </TableContainer>
        </section>
  )
}

export default ViewRequests
