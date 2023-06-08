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
<InputLabel
  htmlFor="contact-mobile"
  className={style.labelsmall}
>
  <p>First Name</p>
</InputLabel>

</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Last Name</h4>
<InputLabel
  htmlFor="LastName"
  className={style.labelsmall}
>
  <p>Last Name</p>
</InputLabel>

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >SBU</h4>
<InputLabel
  htmlFor="sbu"
  className={style.label}
>
  <p>SBU</p>
</InputLabel>



    </Grid>
    </Grid>


    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Plant</h4>
<InputLabel
  htmlFor="plant"
  className={style.label}
>
  <p>Palnt</p>
</InputLabel>



    </Grid>
    </Grid>

    <Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Department</h4>
<InputLabel
  htmlFor="department"
  className={style.label}
>
  <p>Department</p>
</InputLabel>


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
<InputLabel
  htmlFor="contact-mobile"
  className={style.labelsmall}
>
  <p>Contact-Mobile</p>
</InputLabel>

</Grid>

<Grid item xs={6}>

<h4 className={style.headingtitlevehi}>Contact-Home</h4>
<InputLabel
  htmlFor="contact-home"
  className={style.labelsmall}
>
  <p>Contact-Home</p>
</InputLabel>

</Grid>



</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Email</h4>
<InputLabel
  htmlFor="email"
  className={style.label}
>
  <p>Email</p>
</InputLabel>


</Grid>
</Grid>


<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Address</h4>
<InputLabel
  htmlFor="address"
  className={style.label}
>
  <p>Address</p>
</InputLabel>


</Grid>
</Grid>

<Grid container spacing={2}>

<Grid item xs={12}>

<h4 className={style.headingtitlevehi} >Department</h4>
<InputLabel
  htmlFor="Department"
  className={style.label}
>
  <p>Department</p>
</InputLabel>



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