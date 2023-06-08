import React, { useState } from 'react';

function Datapicker() {
  const [date, setDate] = useState('');
  console.log("date", date);

  return (
    <div className='main'>
      <input
        type="date"
        onChange={e => setDate(e.target.value)}
        style={{
          paddingLeft: "0px",
          backgroundColor: '#282828',
          color: '#6b6b6b',
          width: "520px",
          outline: 'none', 
          border: 'none', 
        }}
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
