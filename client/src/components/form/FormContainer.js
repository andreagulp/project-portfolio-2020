import React from "react";
import Grid from "@material-ui/core/Grid";

import InputField from "./InputField";
import useForm from "./useForm";

function FormContainer() {
  const initialState = {
    title: "",
    description: "",
    issueid: "",
    projectManager: "",
    developer: "",
    brand: ""
  };

  const { values, handleFieldChange, handleSubmit } = useForm(initialState);

  return (
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
  );
}

export default FormContainer;
