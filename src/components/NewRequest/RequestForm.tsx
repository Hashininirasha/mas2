import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './RequestForm.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants/routes.constants';

const NewRequest = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const navigate = useNavigate()

  const handleNewRequest = () => {

    navigate(APP_ROUTES.REQUEST_CREATION)
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
            <h3>Transport Request</h3>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <div>
            <Button className={style.gridActionButton} variant="contained">
              <Box>
                <div className='layout-row'>
                  <Typography className={style.text}>
                    Select saved template
                  </Typography>
                  <KeyboardArrowDownOutlinedIcon className={style.icon} />
                </div>
              </Box>
            </Button>
          </div>
        </div>
        <hr />
        <div className={style.gridHeader}>
          <Box sx={{ flexGrow: 1 }} />
          <div>
            <Button className={style.sendRequestButton} variant="contained">
              <Box>
                <div className='layout-row'>
                  <Typography className={style.text}
  onClick={() => {
    handleClick();

    
  }} >
                    Send Request
                  </Typography>
                </div>
              </Box>
            </Button>
          </div>
        </div>
      </section>
       
      {showAlert && (
        <Alert severity="success" onClose={handleAlertClose} className={style.alertbox}   onClick={() => {
         
          handleNewRequest();
      
          
        }}>
          <AlertTitle>Requested Successfully</AlertTitle>
       
        </Alert>

      )}
    
    </div>
  );
};

export default NewRequest;