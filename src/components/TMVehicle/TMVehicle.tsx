import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from '../TMVehicle/Table'
import Datapicker from './Calendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const TMVehicle = () => {

  const [com_name_isPlaceholderVisible, com_name_setIsPlaceholderVisible] = React.useState(true);

  const com_name_handleSelectClick= () => {
    com_name_setIsPlaceholderVisible(false);
  };

  const [vehitype_isPlaceholderVisible, vehitype_setIsPlaceholderVisible] = React.useState(true);

  const vehitype_handleSelectClick = () => {
    vehitype_setIsPlaceholderVisible(false);
  };

  const [plant_isPlaceholderVisible, plant_setIsPlaceholderVisible] = React.useState(true);

  const plant_handleSelectClick = () => {
    plant_setIsPlaceholderVisible(false);
  };
  
  const [com_name_selectedOption, com_name_setSelectedOption] = useState('');
  const [vehitype_selectedOption, vehitype_setSelectedOption] = useState('');
  const [plant_selectedOption, plant_setSelectedOption] = useState('');


  const com_name_handleChangeOption = (event: any) => {
    com_name_setSelectedOption(event.target.value);
  };

  const vehitype_handleChangeOption = (event: any) => {
    vehitype_setSelectedOption(event.target.value);
  };

  const plant_handleChangeOption = (event: any) => {
    plant_setSelectedOption(event.target.value);
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
       
      <div>  
         </div>
   
      <div> 
    </div> 

    <Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.dropdownName}>Company Name</h4>
          <FormControl
        className={style.dropdownform}
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
  className={style.dropdownInput}
    id="company_name"
    shrink={!com_name_isPlaceholderVisible}
  >
    
    {com_name_isPlaceholderVisible ? 'Select Company Name' : ''}
  </InputLabel>
  <Select
    labelId="comName-label"
    id="comName"
    value={com_name_selectedOption}
    onChange={com_name_handleChangeOption}
    onClick={com_name_handleSelectClick}
 
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>


     
</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.textboxtitle}>Vehicle Number</h4>
          
          <TextField
            id="vehicle_number"
            variant="outlined"
            className={style.textboxinput}
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

          <h4 className={style.dropdownName}>Vehicle Type</h4>
          <FormControl
           className={style.dropdownform}
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
    className={style.dropdownInput}
    shrink={!vehitype_isPlaceholderVisible}
    
  >
    {vehitype_isPlaceholderVisible ? 'Select Vehicle Type' : ''}
  </InputLabel>
  <Select
    labelId="vehiType-label"
    id="vehiType"
    value={vehitype_selectedOption}
    onChange={vehitype_handleChangeOption}
    onClick={vehitype_handleSelectClick}
   
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.dropdownName}>Plant</h4>
          <FormControl
     className={style.dropdownform}
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
    className={style.dropdownInput}
    shrink={!plant_isPlaceholderVisible}
   
  >
    {plant_isPlaceholderVisible ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="plant-label"
    id="plant"
    value={plant_selectedOption}
    onChange={plant_handleChangeOption}
    onClick={plant_handleSelectClick}
    
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

<h4 className={style.textboxtitle}>Available Seats</h4>

 
          <TextField
            id="Seats"
            variant="outlined"
            className={style.textboxinput}
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

</Grid>
<Grid item md={6} xs={6} sm={12}>

</Grid>
</Grid>

     <div>
      <div className={style.gridHeader}>
       <h3>Incident</h3>
       <br></br>
      </div>
      <h4 className={style.incident}>Incident</h4>
      <TextField
          id="incident"
          placeholder="Enter Incident"
          className={style.inicidentText}
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
          <h4 className={style.textboxtitle}>Date</h4>
          <TextField
  id="date"
  variant="outlined"
  className={style.textboxinput}
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
        className={style.calendarButtonicon}
        aria-label="calendar"
        component="span"
      > 
        <Datapicker/>

     
      
   
      </IconButton>
    ),
  }}
  placeholder="dd/mm/yyyy"
/>

</Grid>

<Grid item md={6} xs={6} sm={12}>
    
          <h4 className={style.textboxtitle}>Outcome</h4>
          <TextField
            id="outcome"
            variant="outlined"
            className={style.textboxinput}
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
    <div className={style.btn}>
            <Button className={style.clear}>Clear</Button>
            <Button className={style.add}>Add</Button>
          </div>

          </Grid>
</Grid>
          
  <h4 className={style.recIncident}>Recorded Incidents</h4>

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
    <div className={style.btn}>
            <Button className={style.delete}>Delete</Button>
            <Button className={style.use}>Use</Button>
            
          </div>
</Grid>
</Grid>


</section>
 </div>

     );
   };
   

export default TMVehicle;