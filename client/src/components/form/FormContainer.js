import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import uuidv4 from "uuid/v4";

import { addProject } from "../../actions/project_action";
import InputField from "./InputField";
import useForm from "./useForm";
import ProjectFinancial from "./ProjectFinancial";
import SelectField from "./SelectField";
import { brand, employees } from "../../assets/formConfig";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(5),
    float: "right"
  }
}));

function FormContainer({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    description: "",
    issueid: "",
    projectManager: "",
    developer: "",
    brand: "",
    team: ""
  };

  const { values, selectedDate, handleFieldChange, handleDateChange } = useForm(
    initialState
  );

  const [stateTable, setStateTable] = React.useState({
    columns: [
      {
        title: "Market",
        field: "market",
        lookup: {
          1: "AR",
          2: "Benelux",
          3: "BPM",
          4: "CEE",
          5: "DACH",
          6: "France",
          7: "Italy",
          8: "MEA",
          9: "Nordics",
          10: "SPGI",
          11: "UKI"
        }
      },
      { title: "Hours", field: "hours", type: "numeric" }
    ],
    data: [
      { market: 1, hours: 0 },
      { market: 2, hours: 0 },
      { market: 3, hours: 0 },
      { market: 4, hours: 0 },
      { market: 5, hours: 0 },
      { market: 6, hours: 0 },
      { market: 7, hours: 0 },
      { market: 8, hours: 0 },
      { market: 9, hours: 0 },
      { market: 10, hours: 0 },
      { market: 11, hours: 0 }
    ]
  });

  const submitProject = () => {
    let marketBenefits = stateTable.data.map(item => {
      return {
        name: stateTable.columns[0].lookup[item.market],
        hours: parseInt(item.hours, 10)
      };
    });

    let newProject = {
      ...values,
      estimatedMvpDate: selectedDate,
      benefitsByMarket: marketBenefits,
      benefitsFullYear: marketBenefits.reduce((a, b) => a.hours + b.hours)
    };
    dispatch(addProject(newProject));
    history.push("/projects");
    // console.log(marketBenefits);
  };

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

  console.log("projectManagers", projectManagers);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Info
        </Typography>
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
                id="date-picker-dialog"
                label="Estimated MVP Date"
                format="dd/MMM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Financial
        </Typography>
        <Grid container spacing={3}>
          <ProjectFinancial
            stateTable={stateTable}
            setStateTable={setStateTable}
          />
        </Grid>

        <Button
          onClick={submitProject}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Primary
        </Button>
      </Grid>
    </Grid>
  );
}

export default withRouter(FormContainer);
