import React, { useState } from "react";

function useForm(initialState) {
  const [values, setValue] = useState(initialState);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleFieldChange = e => {
    e.preventDefault();
    setValue({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return {
    values,
    selectedDate,
    handleFieldChange,
    handleDateChange
  };
}

export default useForm;
