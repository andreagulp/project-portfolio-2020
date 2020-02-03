import React from "react";
import TextField from "@material-ui/core/TextField";

function InputField({
  name,
  label,
  multiline,
  isError,
  helperText,
  values,
  handleFieldChange
}) {
  return (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      margin="normal"
      multiline={multiline}
      rows="4"
      fullWidth
      error={isError}
      helperText={helperText}
      value={values}
      onChange={handleFieldChange}
    />
  );
}

export default InputField;
