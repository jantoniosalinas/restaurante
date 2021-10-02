import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function TimePick() {
  const [value, handleChange] = useState('13:00');

  return (
    <div>
      <TimePicker
        format = 'HH:mm a'
        minTime = '13:00:00'
        maxTime = '20:00:00'
        onChange={(e) => handleChange(e)}
        value={value}
        name="myTime"
        id="myTime"
      />
    </div>
  );
}

export default TimePick;
