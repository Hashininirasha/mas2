import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Popover, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocalizationProvider from '@mui/lab/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const TMVehicle = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState('');


  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');


  const handleChangeOption1 = (event: any) => {
    setSelectedOption1(event.target.value);
  };

  const handleChangeOption2 = (event: any) => {
    setSelectedOption2(event.target.value);
  };

  const handleChangeOption3 = (event: any) => {
    setSelectedOption3(event.target.value);
  };
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'calendar-popover' : undefined;

  const handleNewRequest = () => {

    navigate(APP_ROUTES.TM_VEHICLE_MANAGEMENT)
  }

  
  return (
    <div>
      <section className={style.gridContainer}>
        <div className={style.gridHeader}>
          <Typography
            noWrap
            component="div"
            className={style.gridTitle}
          >
            <h3>Manage Vehicles</h3>
          </Typography>  
        </div>
        <hr />
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />
          
        </div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div> 
    
    
    </div>
      
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

      <Grid container spacing={2}justifyContent="flex-end">
  <Grid item xs={12} sm={6}>


      <h4 className={style.headingtitle}>Company Name</h4>
     <FormControl className={style.titletextboxdropdown}>
        <Select
          labelId="option1-label"
          id="option1"
          value={selectedOption1}
          onChange={handleChangeOption1}
          className={style.titletextbox}
        >
          <MenuItem  value="option1Value1">Option 1 Value 1</MenuItem>
          <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
          <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
        </Select>
      </FormControl>

      </Grid>
  <Grid item xs={12} sm={6}>

      <h4 className={style.headingtitlevehi}>Vehicle Number</h4>
          <TextField
        id="outlined-basic"
        className={style.titletextboxVehi}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline,
            input: style.whitePlaceholder
          },
          placeholder: "Enter Incident"
          
        }}
      />
</Grid>
</Grid>

    </div>

{/* Second end*/}

    
      <div>

<Grid container spacing={2}justifyContent="flex-end">
<Grid item xs={12} sm={6}>


<h4 className={style.headingtitle}>Vehicle Type</h4>
<FormControl className={style.titletextboxdropdown}>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption2}
    onChange={handleChangeOption2}
    className={style.titletextbox}
  >
    <MenuItem  value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <h4 className={style.headingtitle}>Plant</h4>
      <FormControl className={style.titletextboxdropdown}>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption3}
    onChange={handleChangeOption3}
    className={style.titletextboxdropdown}
  >
    <MenuItem  value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
      </Grid>
      </Grid>
      </div>
        
{/* Third end*/}


      <div>
        
      <div className={style.gridHeader}>
       <h3 >Indicates</h3>
       <br></br>
       
      </div>
      
      <h4 className={style.headingtitle}> Incident</h4>
      <TextField
      
          id="incident"
     
          placeholder="Enter Incident"
          multiline
          className={style.titletextboxincident}
          InputProps={{
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline
            }
          }}
         
        />

      </div>

{/* Fouth  */}
<div>
  <Grid container spacing={2} justifyContent="flex-end">
    <Grid item xs={12} sm={6}>
      <h4 className={style.headingtitle}>Date</h4>

      <TextField
        id="filled-textarea"
        placeholder="Placeholder"
        multiline
        className={style.titletextbox}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
          endAdornment: (
            <div>
      <IconButton className={style.calendarButton} onClick={handleClick}>
        <CalendarMonthRoundedIcon className={style.calendarIcon} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Popover>
      </div>
          ),
        }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <h4 className={style.headingtitle}>Outcome</h4>
      
      <TextField
        id="filled-textarea"
        placeholder="Placeholder"
        multiline
        className={style.titletextbox}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
        }}
      />
    </Grid>
  </Grid>
</div>


     
    </Box>
    </Box>

    <Grid container spacing={2} className={style.btn} justifyContent="flex-end">
  <Grid item xs={12} sm={6}>
    <Button className={style.btntemp1}>Cancel</Button>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Button className={style.btntemp2}>Save</Button>
  </Grid>
</Grid>

      </section>
       
    
    </div>
  );
};

export default TMVehicle;