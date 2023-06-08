import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from '../TMVehicle/Table'
import Datapicker from './Calendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const TMVehicle = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState('');

  const [isPlaceholderVisible1, setIsPlaceholderVisible1] = React.useState(true);

  const handleSelectClick1 = () => {
    setIsPlaceholderVisible1(false);
  };

  const [isPlaceholderVisible2, setIsPlaceholderVisible2] = React.useState(true);

  const handleSelectClick2 = () => {
    setIsPlaceholderVisible2(false);
  };

  const [isPlaceholderVisible3, setIsPlaceholderVisible3] = React.useState(true);

  const handleSelectClick3 = () => {
    setIsPlaceholderVisible3(false);
  };
  
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
        '& fieldset': {
          borderColor: 'white', // Set outline color to white
        },
        
      }}
      noValidate
      autoComplete="off"
    >
      <div> 
    </div>   
    <Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px'}}>Company Name</h4>
          <FormControl
          style={{ width: '100%', paddingLeft: '10px' }}
  className={style.titletextboxdropdown}
  sx={{
    '& .MuiSelect-select': {
      color: 'white',
      '&:hover, &:focus': {
        color: 'white',
      },
    },
    '& .MuiSelect-icon': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      '&:hover, &:focus': {
        backgroundColor: 'white',
      },
    },
  }}
>
  <InputLabel
    id="company_name"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible1}
    style={{paddingLeft: '5px'}}

  >
    {isPlaceholderVisible1 ? 'Select Company Name' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption1}
    onChange={handleChangeOption1}
    onClick={handleSelectClick1}
 
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
     
</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px'}}>Vehicle Number</h4>
          
          <TextField
            id="vehicle_number"
            variant="outlined"
           
            style={{ width: '97%' }}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Incident',
            }}
          />

   
        </Grid>
</Grid>


<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Vehicle Type</h4>
          <FormControl
          style={{ width: '99%', paddingLeft: '10px' }}
  sx={{
    '& .MuiSelect-select': {
      color: 'white',
      '&:hover, &:focus': {
        color: 'white',
      },
    },
    '& .MuiSelect-icon': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      '&:hover, &:focus': {
        backgroundColor: 'white',
      },
    },
  }}
>
  <InputLabel
    id="vehicle_type"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible2}
    style={{paddingLeft: '5px'}}
  >
    {isPlaceholderVisible2 ? 'Select Vehicle Type' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption2}
    onChange={handleChangeOption2}
    onClick={handleSelectClick2}
   
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.headingtitlevehi}  style={{ paddingLeft: '15px' }}>Plant</h4>
          <FormControl
  className={style.titletextboxdropdown} style={{ width: '98%', paddingLeft: '15px' }}
  sx={{
    '& .MuiSelect-select': {
      color: 'white',
      '&:hover, &:focus': {
        color: 'white',
      },
    },
    '& .MuiSelect-icon': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset, &:focus fieldset': { borderColor: 'white' },
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      '&:hover, &:focus': {
        backgroundColor: 'white',
      },
    },
  }}
>
  <InputLabel
    id="plant"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible3}
    style={{ width: '98%', paddingLeft: '15px'}}
  >
    {isPlaceholderVisible3 ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption3}
    onChange={handleChangeOption3}
    onClick={handleSelectClick3}
    
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>       
</Grid>
</Grid>
      
   
<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>

<h4 style={{paddingLeft: '5px'}}>Available Seats</h4>

<FormControl className={style.styleright} >   
          <TextField
            id="Seats"
            variant="outlined"
            style={{ width: '98%', paddingLeft: '1px' }}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Available Seats',
            }}
          />
</FormControl>
</Grid>
<Grid item md={6} xs={6} sm={12}>

</Grid>
</Grid>
     <div>
      <div className={style.gridHeader}>
       <h3>Incident</h3>
       <br></br>
      </div>
      <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Incident</h4>
      <TextField
          id="incident"
          placeholder="Enter Incident"
          style={{ width: '98%' }}
          multiline
        
          InputProps={{
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline
            },
            style: {
              color: 'white', 
            }
          }}

        />

      </div>

    
      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Date</h4>
          <TextField
  id="date"
  variant="outlined"
  style={{ width: '98%' }}
  InputProps={{
    classes: {
      focused: style.focusedInput,
      notchedOutline: style.whiteOutline,
      input: style.whitePlaceholder,
    },
    style: {
      color: 'white',
    },
    endAdornment: (
      <IconButton
        style={{ color: 'white' }}
        aria-label="calendar"
        component="span"
      >
        <CalendarMonthIcon />
      </IconButton>
    ),
  }}
  placeholder="dd/mm/yyyy"
/>

</Grid>

<Grid item md={6} xs={6} sm={12}>
    
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Outcome</h4>
          <TextField
            id="outcome"
            variant="outlined"
            style={{ width: '96%' }}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter outcome',
            }}
          />
    
  
</Grid>
</Grid>
  
  <br></br>

  <Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
    <div style={{ width: '100%'}}>
            <Button className={style.btntemp1first}>Clear</Button>
            <Button className={style.btntemp2first}>Add</Button>
          </div>

          </Grid>
</Grid>
          
  <h4 className={style.headingtitlevehi} style={{paddingLeft: '30px'}}>Recorded Incidents</h4>

  <DataTable/>

<br></br>
<Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
   
  </Grid>
  <Grid item md={3} xs={3} sm={12}>
    <div style={{ width: '100%'}}>
            <Button className={style.btntemp1}>Delete</Button>
            <Button className={style.btntemp2}>Use</Button>
            
          </div>
</Grid>
</Grid>
</Box>
</Box>
</section>
 </div>

     );
   };
   

export default TMVehicle;