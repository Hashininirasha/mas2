import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './NewUser.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import Avatar from '@mui/material/Avatar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';





const NewUser = () => {
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
          
          </Typography>  
        </div>
    
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />

        </div>
        <Box className={style.outline}>
 
    <Grid container spacing={2}>
        <Grid item xs>
        
        <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
        
    
        </Grid>
        <Grid item xs={5}>
        <h2 style={{ marginBottom: '4px' }}>Udayanga Bandara</h2>
    <h4 style={{ marginTop: '0', marginBottom: '8px' }}>Marketing Manager</h4>
     
         <h5>Your account is ready, you can apply for the trip</h5>

<div className={style.personal}>

    <h3>Personal</h3>
  

         <Grid container spacing={2}>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>First Name</h4>
<TextField
  id="firstname"
  variant="outlined"
  className={style.txtbox}
  InputProps={{
    classes: {
      focused: style.focusedInput,
      notchedOutline: style.whiteOutline,
      input: style.whitePlaceholder,
    },
    style: {
      color: 'white',
    },
    placeholder: 'First Name',
  }}
/>


</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Last Name</h4>
          <TextField
            id="firstname"
            variant="outlined"
            className={style.txtbox}
           
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Last Name',
            }}
          />

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >SBU</h4>
          <TextField
            id="SBU"
            variant="outlined"
            className={style.txtboxlarge}
           
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'SBU',
            }}
          />

    </Grid>
    </Grid>


    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Plant</h4>
          <TextField
            id="SBU"
            variant="outlined"
            className={style.txtboxlarge}
           
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Plant',
            }}
          />

    </Grid>
    </Grid>

    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Department</h4>
          <TextField
            id="SBU"
            variant="outlined"
            className={style.txtboxlarge}
           
            InputProps={{
              classes: {
                focused: style.focusedInput,
                notchedOutline: style.whiteOutline,
                input: style.whitePlaceholder,
              },
              style: {
                color: 'white', 
              },
              placeholder: 'Department',
            }}
          />

    </Grid>
    </Grid>

</div>



        </Grid>
        <Grid item xs={5}>
        <div className={style.contact}>

<h3>Contact</h3>


     <Grid container spacing={2}>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Contact-Mobile</h4>
<TextField
id="firstname"
variant="outlined"
className={style.txtbox}
InputProps={{
classes: {
  focused: style.focusedInput,
  notchedOutline: style.whiteOutline,
  input: style.whitePlaceholder,
},
style: {
  color: 'white',
},
placeholder: '0712565658',
}}
/>


</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Contact-Home</h4>
      <TextField
        id="firstname"
        variant="outlined"
        className={style.txtbox}
       
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline,
            input: style.whitePlaceholder,
          },
          style: {
            color: 'white', 
          },
          placeholder: '0456699852',
        }}
      />

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Email</h4>
      <TextField
        id="SBU"
        variant="outlined"
        className={style.txtboxlarge}
       
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline,
            input: style.whitePlaceholder,
          },
          style: {
            color: 'white', 
          },
          placeholder: 'udayanag@mas.com',
        }}
      />

</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Address</h4>
     <label htmlFor="address" className={style.txtboxlarge} style={{ width: '100%' }}>
  No.45/1B, Galle Rd, Ratmalana
</label>


</Grid>
</Grid>



</div>
        </Grid>
      </Grid>



    



  
  
</Box>

</section>
   
       </div>

     );
   };
   

export default NewUser;