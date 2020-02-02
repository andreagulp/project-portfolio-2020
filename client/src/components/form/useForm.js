import React, { useState } from "react";

function useForm(initialState) {
  const [values, setValue] = useState(initialState);

  const handleFieldChange = e => {
    e.preventDefault();
    setValue({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("HandleSubmit has been called");
  };

  return {
    values,
    handleFieldChange,
    handleSubmit
  };
}

export default useForm;
