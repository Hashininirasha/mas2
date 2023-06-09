import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './NewCompnay.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from './Table'



const NewCompnay = () => {
 

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
       
      

    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>



<h4 className={style.textboxtitle}>Company Name</h4>

          <TextField
            id="compnayname"
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
              placeholder: 'Enter Compnay Name',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>


<h4 className={style.textboxtitle}>Registered Number</h4>


          <TextField
            id="reg_num"
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
              placeholder: 'Enter Registered Number',
            }}
          />



</Grid>
</Grid>

  
<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>


 
          <h4 className={style.dropdownName}>Attached SBUs</h4>
          <FormControl className={style.dropdownform}
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
    className={style.dropdownInput}
    shrink={!isPlaceholderVisible1}
   
   
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

<h4 className={style.textboxtitle}>Telephone Number</h4>


          <TextField
            id="tele_num"
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
              placeholder: 'Enter Telephone Number',
            }}
          />
         
      </Grid>
      </Grid>


<br></br>
<hr></hr>

      <div className={style.gridHeader}>
      <h3 className={style.subtitle}>Address</h3> 
      </div>


   
      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
    
    
    
          <h4 className={style.textboxtitle}>Address Line 1</h4>
          
          <TextField
            id="tele_num"
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
              placeholder: 'Enter Address Line 1',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.textboxtitle}>Address Line 2</h4>
        
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
              placeholder: 'Enter Address Line 2',
            }}
          />

    </Grid>
    </Grid>
   
    

 
    <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
      
 
          <h4 className={style.textboxtitle}>City</h4>
          <FormControl className={style.styleleft}>
          <TextField
            id="tele_num"
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
              placeholder: 'Enter City',
            }}
          />
</FormControl>

</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          <h4 className={style.textboxtitle} >District</h4>
         
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
              placeholder: 'Enter District',
            }}
          />
         
</Grid>
    
</Grid>
 
    

<Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
  

<h4 className={style.textboxtitle}>Province</h4>
       
          <TextField
            id="tele_num"
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
              placeholder: 'Enter Province',
            }}
          />


</Grid>

<Grid item md={6} xs={6} sm={12}>
   
          
<h4 className={style.textboxtitle}>Postal Code</h4>
          <FormControl className={style.styleright}>
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
              placeholder: 'Enter Postal Code',
            }}
          />
          </FormControl>
  
  </Grid>
    
</Grid>  
 

  <br></br>
  <hr></hr>

  <div className={style.gridHeader}>
       <h3 className={style.subtitle}>Payment Details</h3> 
      </div>



      <Grid container spacing={2}>

<Grid item md={6} xs={6} sm={12}>
  
<h4 className={style.dropdownName}>Payment method</h4>
          <FormControl  className={style.dropdownform}
     
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
    className={style.dropdownInput}
    shrink={!isPlaceholderVisible2}
    
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

<h4 className={style.dropdownName}>Bank</h4>
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
    id="bank"
    className={style.dropdownInput}
    shrink={!isPlaceholderVisible2}
    
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
    
 
<h4 className={style.textboxtitle}>Beneficiary Name</h4>

          <TextField
            id="BeneficiaryName"
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
              placeholder: 'Enter Beneficiary Name',
            }}
          />
         

</Grid>

<Grid item md={6} xs={6} sm={12}>

<h4 className={style.textboxtitle}>Account Number</h4>
      
    
          <TextField
            id="accnum"
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
              placeholder: 'Enter Account Number',
            }}
          />
       
     </Grid>
     </Grid>
 
  
    
 
  
<br></br>
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
      <Button className={style.add}>Add Payment Details</Button>
    </div>
  </Grid>
</Grid>

<br></br>
<br></br>
<DataTable/>
<br></br>

<hr></hr>
</section>
   
       </div>

     );
   };
   

export default NewCompnay;