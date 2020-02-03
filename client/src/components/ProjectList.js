import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../actions/project_action";

function ProjectList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <h4>Hello ProjectList</h4>
    </div>
  );
}

export default ProjectList;
