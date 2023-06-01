import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


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
     <FormControl 
>
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

     <TextField
  id="outlined-basic"
  variant="outlined"
  InputProps={{
    classes: {
      focused: style.focusedInput,
      notchedOutline: style.whiteOutline,
      input: style.whitePlaceholder
    },
    placeholder: "Enter Incident"
  }}
/>
  
    </div>



      <div>
      <FormControl>
        <Select
          labelId="option1-label"
          id="option1"
          value={selectedOption2}
          onChange={handleChangeOption2}
          className={style.titletextbox}
  
        >
          <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
          <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
          <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Select
          labelId="option1-label"
          id="option1"
          value={selectedOption3}
          onChange={handleChangeOption3}
          className={style.titletextbox}
  
        >
          <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
          <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
          <MenuItem value="option1Value3">Option 1 Value 3</MenuItem>
        </Select>
      </FormControl>
      
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
            }
          }}
         
        />

      </div>
      <div>
      <TextField
          id="filled-textarea"
         
          placeholder="Placeholder"
          multiline
          className={style.titletextbox}
          InputProps={{
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline
            }
          }}
        />

<TextField
          id="filled-textarea"
       
          placeholder="Placeholder"
          multiline
          className={style.titletextbox}
          InputProps={{
            classes: {
              focused: style.focusedInput,
              notchedOutline: style.whiteOutline
            }
          }}
        />

      
      </div>

      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </Box>
    </Box>

    
      </section>
       
    
    </div>
  );
};

export default TMVehicle;