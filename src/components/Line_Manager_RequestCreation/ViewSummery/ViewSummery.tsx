import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './ViewSummery.module.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function ViewSummeryLM() {
  return (
    <section className={style.viewSummery}>
      <Grid container spacing={4}>
        <Grid item md={4} >
          <Card className={style.viewSummeryCard}>
            <CardContent>
              <Box className={style.viewSummeryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    04
                  </Typography>
                  <Typography className={style.pending}>
                    Pending Requests
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <Button className={style.action} variant="contained">
                    <div className='layout-row'>
                      <Typography className={style.text}>This Month</Typography>
                      <KeyboardArrowDownOutlinedIcon className={style.icon} />
                    </div>
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4} >
          <Card className={style.viewSummeryCard}>
            <CardContent>
              <Box className={style.viewSummeryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    13
                  </Typography>
                  <Typography className={style.approve}>
                    Approved Requests
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <Button className={style.action} variant="contained">
                    <div className='layout-row'>
                      <Typography className={style.text}>This Month</Typography>
                      <KeyboardArrowDownOutlinedIcon className={style.icon} />
                    </div>
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4} >
          <Card className={style.viewSummeryCard}>
            <CardContent>
              <Box className={style.viewSummeryCardDataRow}>
                <Box>
                  <Typography className={style.data}>
                    09
                  </Typography>
                  <Typography className={style.reject}>
                    Rejected Requests
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <Button className={style.action} variant="contained">
                    <div className='layout-row'>
                      <Typography className={style.text}>This Month</Typography>
                      <KeyboardArrowDownOutlinedIcon className={style.icon} />
                    </div>
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  )
}

export default ViewSummeryLM
