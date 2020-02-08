import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProject } from "../actions/project_action";
import useForm from "../components/form/useForm";

function ProjectEdit(props) {
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
    setValue
    // selectedDate,
    // handleFieldChange,
    // handleDateChange
  } = useForm(initialState);

  useEffect(() => {
    dispatch(fetchSingleProject(projectId));
  }, [projectId, dispatch]);

  useEffect(() => {
    setValue({
      ...project
    });
  }, [project, setValue]);

  console.log(values);

  return (
    <div>
      <h4>Hello ProjectEdit : {projectId}</h4>
      <h1>{project.title}</h1>
    </div>
  );
}

export default ProjectEdit;
