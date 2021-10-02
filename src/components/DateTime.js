import React, {useState} from 'react';
import DatePicker from 'react-date-picker';

const DatePick = () => {
    const [value, handleChange] = useState(new Date());
    return (
        <div>
            <DatePicker
                format="yyyy-MM-dd"
                onChange={(e) => handleChange(e)}
                value={value}
                name="myDate"
                id="myDate"
            />
        </div>
    )
}

export default DatePick;

