import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './TMVehicle.module.scss'
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';
import DataTable from '../TMVehicle/Table'
import IVehicleadd, {IIncident} from '../../types/addVehicle'

const incidentsList:IIncident[]=[]

const TMVehicle = () => {

  const [com_name_isPlaceholderVisible, setcom_name_isPlaceholderVisible] = React.useState(true);
  const [vehitype_isPlaceholderVisible, setvehitype_isPlaceholderVisible] = React.useState(true);
  const [plant_name_isPlaceholderVisible, setplant_name_isPlaceholderVisible] = React.useState(true);

   const [date, setDate] = useState('');
 
  const navigate = useNavigate()


  const incidentDetailsInitial: IIncident={
    Incident:"",
    Date:"",
    Outcome:"",
    Id:"",
  }

  const incident: IIncident={
    Incident:"",
    Date:"",
    Outcome:"",
    Id:"",
  }


  const dispatch = useDispatch();

  const [CompanyName, setCompanyName] = useState('')
  const [VehicleType, setVehicleType] = useState('')
  const [plant, setplant] = useState('')

  const vehicleadd: IVehicleadd = {
    CompnayName: CompanyName,
    VehicleNumber: "",
    VehicleType: VehicleType,
    Plant: plant,
    Seats: 0,

   
  };

  const [vehicleaddData, setvehicleaddData] = useState({
    CompnayName: vehicleadd.CompnayName,
    VehicleNumber: vehicleadd.VehicleNumber,
    VehicleType: vehicleadd.VehicleType,
    Plant: vehicleadd.Plant,
    Seats: vehicleadd.Seats,
 
  });

  const [incidentData, setIncidentData] = useState({


    Incident:incident.Incident,
    Date:incident.Date,
    Outcome:incident.Outcome,
    Id:"",

  });


  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setvehicleaddData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentDetailChange = (event:any) => {
    const { name, value } = event.target;
    setIncidentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const AddPaymentDetails=()=>{
    incidentData.Id=new Date().getUTCMilliseconds().toString();
    incidentsList.push(incidentData);
    setIncidentData(incidentDetailsInitial);
    setIncidentData((prevState) => ({
      ...prevState,
      BankDetails: incidentsList,
    }));
    dispatch(addPaymentMethodList(incidentData));
    
  }

  const ClearPaymentDetails=()=>{
    setIncidentData(incidentDetailsInitial);
  }
  

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
            id="CompanyName"
            className={style.dropdownInput}
            shrink={!com_name_isPlaceholderVisible}
           
           
          >
            {com_name_isPlaceholderVisible ? 'Select Company' : ''}
          </InputLabel>
          <Select
            labelId="option1-label"
            id="option1"
            value={vehicleaddData.CompnayName}
            onChange={handleChange}
            name="CompnayName"
            onClick={()=>{setcom_name_isPlaceholderVisible(false)}}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
        </FormControl>


     
</Grid>
<Grid item md={6} xs={6} sm={12}>
          <h4 className={style.textboxtitle}>Vehicle Number</h4>
          
          <TextField
            id="vehicle_number"
            variant="outlined"
            className={style.textboxinput}
            name="VehicleNumber"
            value={vehicleaddData.VehicleNumber}
            onChange={handleChange}
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
            id="sbu"
            className={style.dropdownInput}
            shrink={!vehitype_isPlaceholderVisible}
           
           
          >
            {vehitype_isPlaceholderVisible ? 'Select Attached SBUs' : ''}
          </InputLabel>
          <Select
            labelId="option1-label"
            id="option1"
            value={vehicleaddData.VehicleType}
            onChange={handleChange}
            name="VehicleType"
            onClick={()=>{setvehitype_isPlaceholderVisible(false)}}>
            <MenuItem value="1">SBU1</MenuItem>
            <MenuItem value="2">SBU2</MenuItem>
            <MenuItem value="3">SBU3</MenuItem>
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
            id="sbu"
            className={style.dropdownInput}
            shrink={!plant_name_isPlaceholderVisible}
           
           
          >
            {plant_name_isPlaceholderVisible ? 'Select Attached SBUs' : ''}
          </InputLabel>
          <Select
            labelId="option1-label"
            id="option1"
            value={vehicleaddData.Plant}
            onChange={handleChange}
            name="Plant"
            onClick={()=>{setplant_name_isPlaceholderVisible(false)}}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
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
            name="Seats"
            value={vehicleaddData.Seats}
            onChange={handleChange}
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
          value={incidentData.Incident}
          name="Incident"
          onChange={handlePaymentDetailChange}
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
        type="date"
        id="date"
        // value={incidentData.Date}
        //   name="Date"
        //   onChange={handlePaymentDetailChange}
        
        className={style.inicidentText}
        InputProps={{
          classes: {
            focused: style.focusedInput,
            notchedOutline: style.whiteOutline
          },
          style: {
            color: 'white', 
          }
        }}
        onChange={e => setDate(e.target.value)}
      />

<style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
         
          width: 24px;
          height: 24px;
        }
      `}</style>
</Grid>

<Grid item md={6} xs={6} sm={12}>
    
          <h4 className={style.textboxtitle}>Outcome</h4>
          <TextField
            id="outcome"
            variant="outlined"
            value={incidentData.Outcome}
          name="Outcome"
          onChange={handlePaymentDetailChange}
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