import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import InputField from "./InputField";
import useForm from "./useForm";
import ProjectFinancial from "./ProjectFinancial";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(5),
    float: "right"
  }
}));

function FormContainer() {
  const classes = useStyles();
  const initialState = {
    title: "",
    description: "",
    issueid: "",
    projectManager: "",
    developer: "",
    brand: ""
  };

  const { values, handleFieldChange, handleSubmit } = useForm(initialState);

  const [stateTable, setStateTable] = React.useState({
    columns: [
      {
        title: "Market",
        field: "market",
        lookup: { 1: "DACH", 2: "France", 3: "Italy", 4: "SPGI" }
      },
      { title: "Hours", field: "hours", type: "numeric" }
    ],
    data: [
      { market: 1, hours: 1000 },
      { market: 2, hours: 1300 }
    ]
  });

  const submitProject = () => {
    let newProject = {
      ...values,
      benefitsByMarket: [...stateTable.data]
    };

    console.log(newProject);
  };

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
              handleInputChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Github#"
              name="issueid"
              isError={false}
              helperText={""}
              values={values.issueid}
              handleInputChange={handleFieldChange}
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
              handleInputChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Project Manager"
              name="projectManager"
              isError={false}
              helperText={""}
              values={values.projectManager}
              handleInputChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Developer"
              name="developer"
              isError={false}
              helperText={""}
              values={values.developer}
              handleInputChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Brand"
              name="brand"
              isError={false}
              helperText={""}
              values={values.brand}
              handleInputChange={handleFieldChange}
            />
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

export default FormContainer;
