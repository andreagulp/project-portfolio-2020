import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProject } from "../actions/project_action";

function ProjectEdit(props) {
  const projectId = props.match.params.projectid;

  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  useEffect(() => {
    dispatch(fetchSingleProject(projectId));
  }, [projectId, dispatch]);

  return (
    <div>
      <h4>Hello ProjectEdit : {projectId}</h4>
      <h1>{project.title}</h1>
    </div>
  );
}

export default ProjectEdit;
