import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import uuidv4 from "uuid/v4";

import InputField from "./InputField";
import SelectField from "./SelectField";
import { brand, employees, projectStatuses } from "../../assets/formConfig";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  }
}));

function ProjectInfo({
  values,
  selectedDate,
  handleFieldChange,
  handleDateChange,
  handleDeploymentDateChange,
  selectedDeploymentDate
}) {
  const classes = useStyles();
  // Start build items for dropdown menu teams, project ,manager list, devs list, brand
  const teams = [...new Set(employees.map(x => x.team))].map(y => {
    return {
      _id: uuidv4(),
      name: y
    };
  });

  const projectManagersRef = employees.filter(x => x.role === "PM");
  const projectManagers = [
    ...new Set(projectManagersRef.map(x => x.fullName))
  ].map(y => {
    return {
      _id: uuidv4(),
      name: y
    };
  });

  const devsRef = employees.filter(x => x.role === "DEV");
  const devs = [...new Set(devsRef.map(x => x.fullName))].map(y => {
    return {
      _id: uuidv4(),
      name: y
    };
  });

  return (
    <Grid item xs={12} sm={6}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Info
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <SelectField
          handleFieldChange={handleFieldChange}
          values={values.status}
          label="Status"
          name="status"
          menuItems={projectStatuses}
        />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            label="Title"
            name="title"
            isError={false}
            helperText={""}
            values={values.title}
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            label="Github#"
            name="issueid"
            isError={false}
            helperText={""}
            values={values.issueid}
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="Description"
            name="description"
            multiline
            isError={false}
            helperText={""}
            values={values.description}
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            handleFieldChange={handleFieldChange}
            values={values.projectManager}
            label="Project Manager"
            name="projectManager"
            menuItems={projectManagers}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            handleFieldChange={handleFieldChange}
            values={values.developer}
            label="Developer"
            name="developer"
            menuItems={devs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            handleFieldChange={handleFieldChange}
            values={values.brand}
            label="Brand"
            name="brand"
            menuItems={brand}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            handleFieldChange={handleFieldChange}
            values={values.team}
            label="Team"
            name="team"
            menuItems={teams}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              name="estimatedMvpDate"
              id="date-picker-dialog"
              label="Estimated MVP Date"
              format="dd/MMM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              name="deploymentDate"
              id="date-picker-dialog1"
              label="Deployment Date"
              format="dd/MMM/yyyy"
              value={selectedDeploymentDate}
              onChange={handleDeploymentDateChange}
              fullWidth
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        {/* add deployement date */}
      </Grid>
    </Grid>
  );
}

export default ProjectInfo;
