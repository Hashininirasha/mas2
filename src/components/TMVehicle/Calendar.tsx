import { Style } from '@mui/icons-material';
import React, { useState } from 'react';
import style from './Calendar.module.scss'


function Datapicker() {
  const [date, setDate] = useState('');
  console.log("date", date);

  return (
    <div>
      <input
  type="date"
  onChange={e => setDate(e.target.value)}
  className={style.calstyle}
/>

      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
         
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
}

export default Datapicker;