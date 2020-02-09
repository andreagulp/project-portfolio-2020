import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import uuidv4 from "uuid/v4";

import { fetchSingleProject, updateProject } from "../actions/project_action";
import useForm from "../components/form/useForm";
import useFormBenefits from "../components/form/useFormBenefits";
import ProjectInfo from "../components/form/ProjectInfo";
import ProjectFinancial from "../components/form/ProjectFinancial";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
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
    team: "",
    status: ""
  };

  const initialMarketHours = {
    name: "",
    hours: 0
  };

  const {
    values,
    setValue,
    selectedDate,
    setSelectedDate,
    handleFieldChange,
    handleDateChange,
    selectedDeploymentDate,
    setSelectedDeploymentDate,
    handleDeploymentDateChange
  } = useForm(initialState);

  const {
    newMarketHours,
    benefitsByMkt,
    setBenefitsByMkt,
    handleFieldMktHoursChange,
    addBenefit,
    removeBenefit,
    editBenefit,
    totHours,
    editedBenefit,
    handleEditableBenefitChange,
    updateBenefit
  } = useFormBenefits(initialMarketHours);

  useEffect(() => {
    dispatch(fetchSingleProject(projectId));
  }, [projectId, dispatch]);

  useEffect(() => {
    setValue({
      ...project
    });
    setBenefitsByMkt(project.benefitsByMarket);

    setSelectedDate(project.estimatedMvpDate);

    setSelectedDeploymentDate(project.deployementDate);
  }, [project, setValue, setBenefitsByMkt]);

  //////

  const handleAddBenefit = e => {
    e.preventDefault();
    const mktBenefit = {
      _id: uuidv4(),
      ...newMarketHours
    };
    addBenefit(mktBenefit);
  };

  const handleRemoveBenefit = (e, mktBenefitId) => {
    e.preventDefault();
    removeBenefit(mktBenefitId);
  };

  const handleEditBenefit = mktBenefit => {
    editBenefit(mktBenefit);
  };

  const handleUpdateBenefits = () => {
    updateBenefit();
  };

  const handleUpdateProject = () => {
    const newProject = {
      ...values,
      benefitsByMarket: benefitsByMkt.map(i => {
        return {
          name: i.name,
          hours: i.hours
        };
      }),
      estimatedMvpDate: selectedDate,
      deployementDate: selectedDeploymentDate,
      benefitsFullYear: totHours
    };
    console.log("newProject", newProject);

    dispatch(updateProject(values._id, newProject));
    props.history.push("/projects");
  };

  return (
    <Grid container spacing={3}>
      <ProjectInfo
        values={values}
        selectedDate={selectedDate}
        handleFieldChange={handleFieldChange}
        handleDateChange={handleDateChange}
        handleDeploymentDateChange={handleDeploymentDateChange}
        selectedDeploymentDate={selectedDeploymentDate}
      />

      <Grid item xs={12} sm={6}>
        <ProjectFinancial
          handleFieldMktHoursChange={handleFieldMktHoursChange}
          newMarketHours={newMarketHours}
          benefitsByMkt={benefitsByMkt}
          addBenefit={handleAddBenefit}
          handleRemoveBenefit={handleRemoveBenefit}
          handleEditBenefit={handleEditBenefit}
          totHours={totHours}
          editedBenefit={editedBenefit}
          handleEditableBenefitChange={handleEditableBenefitChange}
          handleUpdateBenefits={handleUpdateBenefits}
        />

        <div>
          <Button
            onClick={handleUpdateProject}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Update Project
          </Button>

          <Button
            onClick={() => props.history.push("/projects")}
            variant="outlined"
            color="default"
            className={classes.button}
          >
            Back
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectEdit;
