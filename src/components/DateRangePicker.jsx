import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isAfter } from 'date-fns';

const DateRangeInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Optionally, reset the end date if it's before the new start date
    if (endDate && isAfter(date, endDate)) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className=' flex gap-3'>

        <div className=' px-[10px] py-[5px] rounded-lg text-[#17694F] border-[#17694F] border-[1px]'>

        <DatePicker
          placeholderText='Start Date'
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd MMMM yyyy"
          />
        </div>

        <div className=' px-[10px] py-[5px] rounded-lg text-[#17694F] border-[#17694F] border-[1px]'>
        
        <DatePicker
          selected={endDate}
          placeholderText='End Date'
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd MMMM yyyy"
        />
      </div>

      <div>
      </div>
    </div>
  );
};

export default DateRangeInput;
