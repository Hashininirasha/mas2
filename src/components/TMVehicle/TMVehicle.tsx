import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
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

    <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    
      <tr>
        <th>

    <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Company Name</h4>
          <FormControl
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
    id="option1-label"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible1}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible1 ? 'Select Company Name' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption1}
    onChange={handleChangeOption1}
    onClick={handleSelectClick1}
    className={style.titletextbox}
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Vehicle Number</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '15px'}}
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
        </th>
      </tr>
    </thead>
    
  </table>
</div>



<div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Vehicle Type</h4>
          <FormControl
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
    id="option1-label"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible2}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible2 ? 'Select Vehicle Type' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption2}
    onChange={handleChangeOption2}
    onClick={handleSelectClick2}
    className={style.titletextbox}
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>

        </th>
        <th>
          <h4 className={style.headingtitlevehi}  style={{ paddingLeft: '15px' }}>Plant</h4>
          <FormControl
  className={style.titletextboxdropdown} style={{paddingLeft: '15px'}}
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
    id="option1-label"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible3}
    style={{ color: 'white', paddingLeft: '15px' }}
  >
    {isPlaceholderVisible3 ? 'Select Plant' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption3}
    onChange={handleChangeOption3}
    onClick={handleSelectClick3}
    className={style.titletextbox}
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
        </th>
      </tr>
    </thead>
    
  </table>
</div>

   

      <div>
      <div className={style.gridHeader}>
       <h3>Indicates</h3>
       <br></br>
      </div>

      <TextField
          id="incident"

          placeholder="Enter Incident"
          multiline
          className={style.titletextboxincident}
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

      <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Date</h4>
          <TextField
  id="outlined-basic"
  variant="outlined"
  className={style.titletextbox}
  style={{ marginLeft: '0px' }}
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


        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Outcome</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '5px'}}
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
        </th>
      </tr>
    </thead>
    
  </table>
  </div>
  
  </th>
  
  </tr>
  
</table>
  <div className={style.btn}>
            <Button className={style.btntemp1}>Delete</Button>
            <Button className={style.btntemp2}>Use</Button>
          </div>
</div>


    </Box>
  
</Box>
</section>
       
    
       </div>
     );
   };
   

export default TMVehicle;