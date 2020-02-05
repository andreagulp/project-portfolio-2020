import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";

import { addProject } from "../actions/project_action";
import useForm from "../components/form/useForm";
import ProjectFinancial from "../components/form/ProjectFinancial";
import ProjectInfo from "../components/form/ProjectInfo";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  },
  headerFinancial: {
    paddingTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1),
    float: "right"
  }
}));

function ProjectCreate({ history }) {
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

  const [totHours, setTotHours] = useState(0);

  useEffect(() => {
    let allMarketHours = stateTable.data.reduce((a, b) => {
      return parseInt(a) + parseInt(b.hours);
    }, 0);
    setTotHours(allMarketHours);
  }, [stateTable.data]);

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
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Info
        </Typography>

        <Grid container spacing={3}>
          <ProjectInfo
            values={values}
            selectedDate={selectedDate}
            handleFieldChange={handleFieldChange}
            handleDateChange={handleDateChange}
          />
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

        <div>
          <Typography
            variant="h5"
            gutterBottom
            className={classes.headerFinancial}
          >
            Total Hours = {totHours}
          </Typography>
        </div>
        <div>
          <Button
            onClick={submitProject}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Add Project
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectCreate;
