import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './NewCompnay.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from './Table'



const NewCompnay = () => {
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

    navigate(APP_ROUTES.SBU_COMPANY_ADD)
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
            <h3>Manage Transport Companies</h3>
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
        <h4 className={style.headingtitlevehi} style={{paddingLeft: '0px'}}>Company Name</h4>
          <TextField
            id="compnayname"
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
              placeholder: 'Enter Compnay Name',
            }}
          />
        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '10px'}}>Registered Number</h4>
          <TextField
            id="reg_num"
            variant="outlined"
            className={style.titletextbox}
            style={{marginLeft: '10px'}}
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Enter Registered Number',
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
          <h4 className={style.headingtitlevehi}>Attached SBUs</h4>
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
    id="sbu"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible2}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible2 ? 'Select Attached SBUs' : ''}
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
          <h4 className={style.headingtitlevehi}  style={{ paddingLeft: '15px' }}>Telephone Number</h4>
          <TextField
            id="tele_num"
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
              placeholder: 'Enter Telephone Number',
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
       <h3 style={{paddingLeft: '7px'}}>Address</h3> 
      </div>


      <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Address Line 1</h4>
          <TextField
            id="tele_num"
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
              placeholder: 'Enter Address Line 1',
            }}
          />


        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Address Line 2</h4>
          <TextField
            id="outcome"
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
              placeholder: 'Enter Address Line 2',
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
          <h4 className={style.headingtitlevehi}>City</h4>
          <TextField
            id="tele_num"
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
              placeholder: 'Enter City',
            }}
          />


        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>District</h4>
          <TextField
            id="outcome"
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
              placeholder: 'Enter District',
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
          <h4 className={style.headingtitlevehi}>Province</h4>
          <TextField
            id="tele_num"
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
              placeholder: 'Enter Province',
            }}
          />


        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Postal Code</h4>
          <TextField
            id="outcome"
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
              placeholder: 'Enter Postal Code',
            }}
          />
        </th>
      </tr>
    </thead>
    
  </table>
  </div>

  </th>
  
  </tr>
 
  <br></br>
  <hr></hr>

  <div className={style.gridHeader}>
       <h3 style={{paddingLeft: '7px'}}>Payment Details</h3> 
      </div>


      <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Payment method</h4>
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
    id="paymentmethod"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible2}
    style={{ color: 'white' }}
  >
    {isPlaceholderVisible2 ? 'Select Payment method' : ''}
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
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Bank</h4>
          <FormControl
          style={{paddingLeft: '15px'}}
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
    id="bank"
    className={style.selectPlaceholder}
    shrink={!isPlaceholderVisible2}
    style={{ color: 'white', paddingLeft: '10px' }}
  >
    {isPlaceholderVisible2 ? 'Select Bank' : ''}
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
      </tr>
    </thead>
    
  </table>
  </div>
  
  <div style={{ overflowX: 'auto' }} className={style.tablealign}>
  <table style={{ whiteSpace: 'nowrap' }}>
    <thead>
      <tr>
        <th>
          <h4 className={style.headingtitlevehi}>Beneficiary Name</h4>
          <TextField
            id="BeneficiaryName"
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
              placeholder: 'Enter Beneficiary Name',
            }}
          />


        </th>
        <th>
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Account Number</h4>
          <TextField
            id="accnum"
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
              placeholder: 'Enter Account Number',
            }}
          />
        </th>
      </tr>
    </thead>
    
  </table>
  </div>
<br></br>

  <div className={style.btnfirst}>
            <Button className={style.btntemp1first}>Clear</Button>
            <Button className={style.btntemp2first}>Add Payment Details</Button>
          </div>
          <br></br>
    
          <DataTable/>

</table>
<br></br>

</div>

 

    </Box>
  
</Box>

<hr></hr>
</section>


    
       </div>

     );
   };
   

export default NewCompnay;