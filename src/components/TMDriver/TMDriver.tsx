import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMDriver.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataTableassign from './TableAssignVehi'
import Recincident from './TableRecinci'
import TablePrevious from './TablePrevious'
import Datapicker from '../TMVehicle/Calendar';



const TMDriver = () => {
  // const [showAlert, setShowAlert] = useState(false);
  // const [value, setValue] = useState('');

  const [trans_com_isPlaceholderVisible, trans_com_setIsPlaceholderVisible] = React.useState(true);

  const trans_com_handleSelectClick = () => {
    trans_com_setIsPlaceholderVisible(false);
  };

  const [plant_isPlaceholderVisible, plant_setIsPlaceholderVisible] = React.useState(true);

  const plant_handleSelectClick = () => {
    plant_setIsPlaceholderVisible(false);
  };

  const [vehiType_isPlaceholderVisible, vehiType_setIsPlaceholderVisible] = React.useState(true);

  const vehiType_handleSelectClick = () => {
    vehiType_setIsPlaceholderVisible(false);
  };
  
  const [vehiNum_isPlaceholderVisible, vehiNum_setIsPlaceholderVisible] = React.useState(true);

  const vehiNum_handleSelectClick = () => {
    vehiNum_setIsPlaceholderVisible(false);
  };
  const [vehiNumIncident_isPlaceholderVisible, vehiNumIncident_setIsPlaceholderVisible] = React.useState(true);

  const vehiNumIncident_handleSelectClick = () => {
    vehiNumIncident_setIsPlaceholderVisible(false);
  };
  const [trans_com_selectedOption, trans_com_setSelectedOption] = useState('');
  const [plant_selectedOption, plant_setSelectedOption] = useState('');
  const [vehiType_selectedOption, vehiType_setSelectedOption] = useState('');
  const [vehiNum_selectedOption, vehiNum_setSelectedOption] = useState('');
  const [vehiNumIncident_selectedOption, vehiNumIncident_setSelectedOption] = useState('');

  const trans_com_handleChangeOption = (event: any) => {
    trans_com_setSelectedOption(event.target.value);
  };

  const plant_handleChangeOption = (event: any) => {
    plant_setSelectedOption(event.target.value);
  };

  const vehiType_handleChangeOption = (event: any) => {
    vehiType_setSelectedOption(event.target.value);
  };

  const vehiNum_handleChangeOption = (event: any) => {
    vehiNum_setSelectedOption(event.target.value);
  };

  const vehiNumIncident_handleChangeOption = (event: any) => {
    vehiNumIncident_setSelectedOption(event.target.value);
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
            <h3>Manage Drivers</h3>
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
   
     
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Driver Name</h4>
          <TextField
            id="driverName"
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
              placeholder: 'Enter Driver Name',
            }}
          />
      
     
</Grid>

<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Transport Company</h4>
          

<FormControl
  style={{ width: '98%', paddingLeft: '5px' }}
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
    id="transport_Company"
    className={style.selectPlaceholder}
    shrink={!trans_com_isPlaceholderVisible}
    style={{ width: '98%' }}
  >
    {trans_com_isPlaceholderVisible ? 'Select Transport Comapny' : ''}
  </InputLabel>
  <Select
    labelId="transport_Company"
    id="transport_Company"
    value={trans_com_selectedOption}
    onChange={trans_com_handleChangeOption}
    onClick={trans_com_handleSelectClick}
    
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

          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Driver NIC Number</h4>
          
          <TextField
            id="driverNIC-basic"
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
              placeholder: 'Enter Driver NIC Number',
            }}
          />
</Grid>

<Grid item md={6} xs={6} sm={12}>
       
     
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Driver License Number</h4>
          <TextField
            id="driverLicense-basic"
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
              placeholder: 'Enter Driver License Number',
            }}
          />
</Grid>
</Grid>

<br></br>
   <hr></hr>
   
   <div className={style.gridHeader}>
       <h3>Assign Vehicles</h3>
       
       <br></br>
       
      </div>
  
  
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px' }}>Plant</h4>
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
    id="plant-label"
    className={style.selectPlaceholder}
    shrink={!plant_isPlaceholderVisible}
    style={{ width: '98%', paddingLeft: '5px'}}
  >
    {plant_isPlaceholderVisible ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="palnt-label"
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

<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Vehicle Type</h4>
          <FormControl 
         
   style={{ width: '98%', paddingLeft: '10px' }}

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
    id="vehiType-label"
    className={style.selectPlaceholder}
    shrink={!vehiType_isPlaceholderVisible}
    style={{ color: 'white', paddingLeft: '10px' }}
    
  >
    {vehiType_isPlaceholderVisible ? 'Select Vehicle Type' : ''}
  </InputLabel>
  <Select
    labelId="vehiType-label"
    id="vehiType"
    value={vehiType_selectedOption}
    onChange={vehiType_handleChangeOption}
    onClick={vehiType_handleSelectClick}
    style={{ width: '100%'}}
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
        <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px' }}>Vehicle Number</h4>
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
    id="vehiNum-label"
    className={style.selectPlaceholder}
    shrink={!vehiNum_isPlaceholderVisible}
    style={{ width: '98%', paddingLeft: '5px'}}
  >
    {vehiNum_isPlaceholderVisible ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="vehiNum-label"
    id="vehiNum"
    value={vehiNum_selectedOption}
    onChange={vehiNum_handleChangeOption}
    onClick={vehiNum_handleSelectClick}
  
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
  </Grid>
  </Grid>
   


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
          <br></br>

          <DataTableassign/>
          <br></br>
          <hr></hr>
         
          <div>
      <div className={style.gridHeader}>
       <h3>Incidents</h3>      
      </div>


<Grid container spacing={2}>
<Grid item md={12} xs={12} sm={12}>
      <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Incident</h4>
      <TextField
          id="incident"

          placeholder="Enter Incident"
          multiline
          style={{ width: '98%', paddingLeft: '1px' }}
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
</Grid>
</Grid>

      </div>


         
<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>
     
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Date</h4>
          <TextField
  id="date"
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
    endAdornment: (
      <IconButton
        style={{ color: 'white'}}
        aria-label="calendar"
        component="span"
      ><Datapicker/>
      <div style={{paddingRight: "55px"}}>
      
      </div>
      </IconButton>
    ),
  }}
  placeholder="dd/mm/yyyy"
/>

</Grid>
<Grid item md={6} xs={6} sm={12}>
      
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px'}}>Outcome</h4>
          <TextField
            id="outcome-basic"
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

<Grid container spacing={2}>
<Grid item md={6} xs={6} sm={12}>


        <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Vehicle Number</h4>
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
    id="vehiNum-label"
    className={style.selectPlaceholder}
    shrink={!vehiNumIncident_isPlaceholderVisible}
    style={{paddingLeft: '5px'}}
  >
    {vehiNumIncident_isPlaceholderVisible ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="vehiNum-label"
    id="vehiNum"
    value={vehiNumIncident_selectedOption}
    onChange={vehiNumIncident_handleChangeOption}
    onClick={vehiNumIncident_handleSelectClick}

  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item md={6} xs={6} sm={12}>
      
      </Grid>
      </Grid>

<br></br>
 
    <br></br>
    <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Recorded Incidents</h4>
  <Recincident/> 
<br></br>
  <hr></hr>
  <br></br>
  <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Previous Work History</h4>
  <br></br>
  <TablePrevious/>
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

   <br></br>
       
    </Box>
  
</Box>
</section>
       

       </div>
     );
   };
   

export default TMDriver;