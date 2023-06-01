import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from "./SingleCard.module.scss";
import PassengerInfo from '../../components/ManageTamplate/PasengerInfo';

function SingleCard() {
  return (
    <div className={style.cardContainer}>
      <Card className={style.gridcontainerTemp} sx={{ minWidth: 275 }}>
        <div className={style.gridTitle}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Trip to Pallekale
            </Typography>
            <Typography sx={{ fontSize: 10 }} gutterBottom>
              Multi Location
            </Typography>
            <br/>
            <Typography variant="body2">
              7 Passengers, 1 Package
              <br />
            </Typography>
          </CardContent>
          <div className={style.iconWrapper}>
            <PassengerInfo/>
          </div>
        </div>
        <CardActions>
          <div className={style.btn}>
            <Button className={style.btntemp1}>Delete</Button>
            <Button className={style.btntemp2}>Use</Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default SingleCard;
