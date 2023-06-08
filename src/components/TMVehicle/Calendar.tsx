import React, { useState } from 'react';

function Datapicker() {
  const [date, setDate] = useState('');
  console.log("date", date);

  return (
    <div style={{ display: 'flex', alignItems: 'left' }}>
      <input
  type="date"
  onChange={e => setDate(e.target.value)}
  style={{
    textAlign: "left",
    paddingLeft: "0px",
    backgroundColor: '#282828',
    color: '#6b6b6b',
    width: "500%",
    outline: 'none', // Add this line to remove the outline
    border: 'none', // Add this line to remove the borders
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