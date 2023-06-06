import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMDriver.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataTableassign from './TableAssignVehi'
import Recincident from './TableRecinci'
import TablePrevious from './TablePrevious'


const TMDriver = () => {
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
  
  const [isPlaceholderVisible4, setIsPlaceholderVisible4] = React.useState(true);

  const handleSelectClick4 = () => {
    setIsPlaceholderVisible4(false);
  };
  const [isPlaceholderVisible5, setIsPlaceholderVisible5] = React.useState(true);

  const handleSelectClick5 = () => {
    setIsPlaceholderVisible5(false);
  };
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');

  const handleChangeOption1 = (event: any) => {
    setSelectedOption1(event.target.value);
  };

  const handleChangeOption2 = (event: any) => {
    setSelectedOption2(event.target.value);
  };

  const handleChangeOption3 = (event: any) => {
    setSelectedOption3(event.target.value);
  };

  const handleChangeOption4 = (event: any) => {
    setSelectedOption4(event.target.value);
  };

  const handleChangeOption5 = (event: any) => {
    setSelectedOption5(event.target.value);
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

    <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    
      <tr>
        <th>

    <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Driver Name</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '0px'}}
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
        </th>
        <th>
          <h4 className={style.headingtitlevehi}>Transport Company</h4>
          

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
    {isPlaceholderVisible1 ? 'Select Transport Comapny' : ''}
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
      </tr>
    </thead>
    
  </table>
</div>



<div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Driver NIC Number</h4>
          
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '0px'}}
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

        </th>
        <th>
          <h4 className={style.headingtitlevehi}>Driver License Number</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '0px'}}
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
        </th>
      </tr>
    </thead>
    
  </table>
</div>
<br></br>
   <hr></hr>
   
   <div className={style.gridHeader}>
       <h3>Assign Vehicles</h3>
       
       <br></br>
       
      </div>
   <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Plant</h4>
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
    {isPlaceholderVisible2 ? 'Select Plant' : ''}
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
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Vehicle Type</h4>
          <FormControl
         
  className={style.vehitypedropdown}
  style={{paddingLeft: '50px'}}
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
    style={{ color: 'white', paddingLeft: '10px' }}
    
  >
    {isPlaceholderVisible3 ? 'Select Vehicle Type' : ''}
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
      <tr>
        <th>
        <h4 className={style.headingtitlevehi}>Vehicle Number</h4>
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
    shrink={!isPlaceholderVisible4}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible4 ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption4}
    onChange={handleChangeOption4}
    onClick={handleSelectClick4}
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
<div className={style.btnfirst}>
            <Button className={style.btntemp1first}>Clear</Button>
            <Button className={style.btntemp2first}>Add</Button>
          </div>
          <br></br>

          <DataTableassign/>
          <br></br>
          <hr></hr>
         
          <div>
      <div className={style.gridHeader}>
       <h3>Incidents</h3>
       
   
       
      </div>
      <h4 className={style.headingtitlevehi} style={{paddingLeft: '20px'}}>Incident</h4>
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

      <tr>
        <th>
        <h4 className={style.headingtitlevehi}>Vehicle Number</h4>
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
    shrink={!isPlaceholderVisible5}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible5 ? 'Select Vehicle Number' : ''}
  </InputLabel>
  <Select
    labelId="option1-label"
    id="option1"
    value={selectedOption5}
    onChange={handleChangeOption5}
    onClick={handleSelectClick5}
    className={style.titletextbox}
  >
    <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
    <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
    <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
  </Select>
</FormControl>
<br></br>

        </th>
      </tr>
    </thead>
    <br></br>
    <h4 className={style.headingtitlevehi} style={{paddingLeft: '0px'}}>Recorded Incidents</h4>

  </table>
  </div>
  
  </th>
  
  </tr>
  <Recincident/> 
<br></br>
  <hr></hr>
  <br></br>
  <h4 className={style.headingtitlevehi} style={{paddingLeft: '30px'}}>Previous Work History</h4>
  <br></br>
  <TablePrevious/>
  <br></br>
  <div className={style.btn}>
            <Button className={style.btntemp1}>Delete</Button>
            <Button className={style.btntemp2}>Use</Button>
          </div>

   <br></br>
       
</table>

</div>


    </Box>
  
</Box>
</section>
       

       </div>
     );
   };
   

export default TMDriver;