import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import style from "./TemplateCreation.module.scss"
import PassengerInfo from '../../components/ManageTamplate/PasengerInfo';



import { Button, Card, CardContent } from '@mui/material'
const TemplateCreation = () => {
  return (
    <section className={style.gridContainer}>
      <div className={style.gridHeader}>
        <h3>Templates</h3>
        <Typography noWrap component="div" className={style.gridTitle}></Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div></div>
      </div>

      <section className={style.viewSummery}>
      <Grid container spacing={4}>
        
        <Grid item md={4} >
        <div className={style.cardContainer}>
      <Card className={style.viewSummeryCard}>
        <CardContent>
          <div className={style.viewSummeryCardDataRow}>
            <div>
              <Typography className={style.data}>
                Trip to Pallekale
              </Typography>
              <Typography className={style.pending}>
                Multi Location
              </Typography>
              <br></br>
              <Typography className={style.pending}>
                7 Passengers, 1 Package
              </Typography>
              <PassengerInfo />
              <div className={style.scrollableBtnContainer}>
                <div className={style.btn}>
                  <Button className={style.btntemp1}>Delete</Button>
                  <Button className={style.btntemp2}>Use</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
        </Grid>

        <Grid item md={4} >
        <div className={style.cardContainer}>
      <Card className={style.viewSummeryCard}>
        <CardContent>
          <div className={style.viewSummeryCardDataRow}>
            <div>
              <Typography className={style.data}>
                Trip to Pallekale
              </Typography>
              <Typography className={style.pending}>
                Multi Location
              </Typography>
              <br></br>
              <Typography className={style.pending}>
                7 Passengers, 1 Package
              </Typography>
              <PassengerInfo />
              <div className={style.scrollableBtnContainer}>
                <div className={style.btn}>
                  <Button className={style.btntemp1}>Delete</Button>
                  <Button className={style.btntemp2}>Use</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
        </Grid>

        <Grid item md={4} >
        <div className={style.cardContainer}>
      <Card className={style.viewSummeryCard}>
        <CardContent>
          <div className={style.viewSummeryCardDataRow}>
            <div>
              <Typography className={style.data}>
                Trip to Pallekale
              </Typography>
              <Typography className={style.pending}>
                Multi Location
              </Typography>
              <br></br>
              <Typography className={style.pending}>
                7 Passengers, 1 Package
              </Typography>
              <PassengerInfo />
              <div className={style.scrollableBtnContainer}>
                <div className={style.btn}>
                  <Button className={style.btntemp1}>Delete</Button>
                  <Button className={style.btntemp2}>Use</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
        </Grid>

      </Grid>
    </section>
    </section>
  );
};

export default TemplateCreation;
