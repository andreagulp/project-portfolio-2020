import { useState } from "react";

function useForm(initialState) {
  const [values, setValue] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDeploymentDate, setSelectedDeploymentDate] = useState(null);

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
  const handleDeploymentDateChange = date => {
    setSelectedDeploymentDate(date);
  };

  return {
    values,
    setValue,
    selectedDate,
    setSelectedDate,
    handleFieldChange,
    handleDateChange,
    selectedDeploymentDate,
    setSelectedDeploymentDate,
    handleDeploymentDateChange
  };
}

export default useForm;
