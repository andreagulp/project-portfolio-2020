import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProject } from "../actions/project_action";
import useForm from "../components/form/useForm";
import ProjectFinancial from "../components/form/ProjectFinancial";
import ProjectInfo from "../components/form/ProjectInfo";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    float: "right"
  }
}));

function ProjectEdit(props) {
  const classes = useStyles();
  const projectId = props.match.params.projectid;

  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  const initialState = {
    title: "",
    description: "",
    issueid: "",
    projectManager: "",
    developer: "",
    brand: "",
    team: ""
  };

  const {
    values,
    setValue,
    selectedDate,
    handleFieldChange,
    handleDateChange
  } = useForm(initialState);

  useEffect(() => {
    dispatch(fetchSingleProject(projectId));
  }, [projectId, dispatch]);

  const [stateTable, setStateTable] = useState({
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

  const testTable = {
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
      { market: 1, hours: 1200 },
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
  };

  // pass data from redux to store
  useEffect(() => {
    setValue({
      ...project
    });
  }, [setValue, project]);

  useEffect(() => {
    setStateTable(testTable);
  }, [testTable]);
  // useEffect(() => {
  //   const editableMarketBenefits = project.benefitsByMarket.map(item => {
  //     return {
  //       market: item.market,
  //       hours: item.hours
  //     };
  //   });
  //   console.log("editableMarketBenefits", editableMarketBenefits);

  //   setStateTable({ ...stateTable, data: editableMarketBenefits });
  // }, [stateTable]);

  console.log("stateTable", stateTable);

  const [totHours, setTotHours] = useState(0);

  // useEffect(() => {
  //   let allMarketHours = stateTable.data.reduce((a, b) => {
  //     return parseInt(a) + parseInt(b.hours);
  //   }, 0);
  //   setTotHours(allMarketHours);
  // }, [stateTable.data]);

  const updateProject = () => {
    console.log(values);
  };

  return (
    <Grid container spacing={3}>
      <ProjectInfo
        values={values}
        selectedDate={selectedDate}
        handleFieldChange={handleFieldChange}
        handleDateChange={handleDateChange}
      />

      <Grid item xs={12} sm={6}>
        <ProjectFinancial
          stateTable={stateTable}
          setStateTable={setStateTable}
          totHours={totHours}
        />

        <div>
          <Button
            onClick={updateProject}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Update Project
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectEdit;
