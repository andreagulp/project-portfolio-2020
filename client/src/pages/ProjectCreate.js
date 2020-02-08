import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import uuidv4 from "uuid/v4";

import { useDispatch } from "react-redux";

import { addProject } from "../actions/project_action";
import useForm from "../components/form/useForm";
import useFormBenefits from "../components/form/useFormBenefits";
import ProjectInfo from "../components/form/ProjectInfo";
import ProjectFinancial from "../components/form/ProjectFinancial";

const useStyles = makeStyles(theme => ({
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
    team: "",
    status: ""
  };

  const initialMarketHours = {
    name: "",
    hours: 0
  };

  const { values, selectedDate, handleFieldChange, handleDateChange } = useForm(
    initialState
  );

  const {
    newMarketHours,
    benefitsByMkt,
    handleFieldMktHoursChange,
    addBenefit
  } = useFormBenefits(initialMarketHours);

  const handleAddBenefit = e => {
    e.preventDefault();
    const mktBenefit = {
      _id: uuidv4(),
      ...newMarketHours
    };
    addBenefit(mktBenefit);
  };

  const [totHours, setTotHours] = useState(0);

  useEffect(() => {
    let allMarketHours = benefitsByMkt.reduce((a, b) => {
      return parseInt(a) + parseInt(b.hours);
    }, 0);
    setTotHours(allMarketHours);
  }, [benefitsByMkt]);

  const submitProject = () => {
    const newProject = {
      ...values,
      benefitsByMarket: benefitsByMkt.map(i => {
        return {
          name: i.name,
          hours: i.hours
        };
      }),
      estimatedMvpDate: selectedDate
    };
    console.log("newProject", newProject);

    dispatch(addProject(newProject));
    history.push("/projects");
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
        {/* //Project Fianncial goes here */}

        <ProjectFinancial
          handleFieldMktHoursChange={handleFieldMktHoursChange}
          newMarketHours={newMarketHours}
          benefitsByMkt={benefitsByMkt}
          addBenefit={handleAddBenefit}
          totHours={totHours}
        />

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
