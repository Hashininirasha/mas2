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

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>



<h4 className={style.headingtitlevehi} style={{ paddingLeft: "15px" }}>Company Name</h4>
<FormControl className={style.styleleft}>
          <TextField
            id="compnayname"
            variant="outlined"
            className={style.styleleft}
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
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>

</Grid>

<Grid item md={6} xs={6} sm={12}>
<h4 className={style.headingtitlevehi} style={{paddingLeft: "5px"}}>Registered Number</h4>
<FormControl style={{ width: '100%' }}>

          <TextField
            id="reg_num"
            variant="outlined"
            style={{ width: '96%'}}
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
</FormControl>



</Grid>
</Grid>

  
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>


 
          <h4 className={style.headingtitlevehi} style={{paddingLeft: "15px" }}>Attached SBUs</h4>
          <FormControl className={style.leftdropdown} 
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
    shrink={!isPlaceholderVisible1}
    style={{paddingLeft: "10px" }}
   
  >
    {isPlaceholderVisible1 ? 'Select Attached SBUs' : ''}
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

<h4 className={style.headingtitlevehi} style={{paddingLeft: "5px"}}>Telephone Number</h4>
<FormControl className={style.styleright}>

          <TextField
            id="tele_num"
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
              placeholder: 'Enter Telephone Number',
            }}
          />
          </FormControl>
      </Grid>
      </Grid>


<br></br>
<hr></hr>

      <div className={style.gridHeader}>
       <h3 style={{paddingLeft: '7px'}}>Address</h3> 
      </div>


   
      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
    
    
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Address Line 1</h4>
          <FormControl className={style.styleleft}>
          <TextField
            id="tele_num"
            variant="outlined"
            className={style.styleleft}
         
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
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '5px'}}>Address Line 2</h4>
          <FormControl className={style.styleright}>
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
              placeholder: 'Enter Address Line 2',
            }}
          />
 </FormControl>
    </Grid>
    </Grid>
   
    

 
    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
      
 
          <h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>City</h4>
          <FormControl className={style.styleleft}>
          <TextField
            id="tele_num"
            variant="outlined"
            className={style.styleleft}
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
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.headingtitlevehi} style={{paddingLeft:"5px"}} >District</h4>
          <FormControl className={style.styleright}>
          <TextField
            id="outcome"
            variant="outlined"
            style={{ width: '96%'}}
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
          </FormControl>
</Grid>
    
</Grid>
 
    

<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
  

<h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Province</h4>
          <FormControl className={style.styleleft}>
          <TextField
            id="tele_num"
            variant="outlined"
            className={style.styleleft}
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
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          
<h4 className={style.headingtitlevehi} style={{paddingLeft: "5px"}}>Postal Code</h4>
          <FormControl className={style.styleright}>
          <TextField
            id="outcome"
            variant="outlined"
            style={{ width: '96%'}}
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
          </FormControl>
  
  </Grid>
    
</Grid>  
 

  <br></br>
  <hr></hr>

  <div className={style.gridHeader}>
       <h3 style={{paddingLeft: '7px'}}>Payment Details</h3> 
      </div>



      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
<h4 className={style.headingtitlevehi} style={{paddingLeft: "15px" }}>Payment method</h4>
          <FormControl className={style.leftdropdown}
     
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
    style={{paddingLeft: "10px" }}
  >
    {isPlaceholderVisible2 ? 'Select Payment method' : ''}
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

<h4 className={style.headingtitlevehi} style={{paddingLeft: '10px'}}>Bank</h4>
          <FormControl style={{ width: '97%', paddingLeft: '10px'}}
         
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
    {isPlaceholderVisible3 ? 'Select Bank' : ''}
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
    
 
<h4 className={style.headingtitlevehi} style={{paddingLeft: '15px'}}>Beneficiary Name</h4>
          <FormControl className={style.styleleft}>
       
       
          <TextField
            id="BeneficiaryName"
            variant="outlined"
            className={style.styleleft}
        
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
          </FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.headingtitlevehi} style={{paddingLeft: "5px"}}>Account Number</h4>
          <FormControl className={style.styleright}>
    
          <TextField
            id="accnum"
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
              placeholder: 'Enter Account Number',
            }}
          />
          </FormControl>
     </Grid>
     </Grid>
 
  
    
 
  
<br></br>
<br></br>

<Grid container spacing={2}>
  <Grid item md={3} xs={3} sm={12}>
    {/* Content for the first grid item */}
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
    {/* Content for the second grid item */}
  </Grid>

  <Grid item md={3} xs={3} sm={12}>
    {/* Content for the second grid item */}
  </Grid>

  

  <Grid item md={3} xs={3} sm={12}>
    <div style={{ width: '100%'}}>
      <Button className={style.btntemp1first}>Clear</Button>
      <Button className={style.btntemp2first}>Add Payment Details</Button>
    </div>
  </Grid>
</Grid>

<br></br>
<br></br>
<DataTable/>
<br></br>



    </Box>
  
</Box>

<hr></hr>
</section>
   
       </div>

     );
   };
   

export default NewCompnay;