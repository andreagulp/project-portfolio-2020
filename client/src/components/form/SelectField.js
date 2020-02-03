import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SelectField({ values, handleFieldChange, label, name, menuItems }) {
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" fullWidth className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>
      <Select
        name={name}
        value={values}
        onChange={handleFieldChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems.map(item => {
          return (
            <MenuItem key={item._id} value={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectField;
