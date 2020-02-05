import axios from "axios";
import { ADD_PROJECT, FETCH_PROJECTS, FETCH_SINGLE_PROJECT } from "./types";

export const fetchProjects = () => {
  const request = axios
    .get(`/api/projects`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
};

export const addProject = project => {
  return dispatch => {
    const request = axios.post("/api/newProject", project).then(response => {
      return response;
    });

    return dispatch({
      type: ADD_PROJECT,
      payload: request
    });
    // .then(() => dispatch(fetchProjects()));
  };
};

export const fetchSingleProject = projectId => {
  // console.log("projectId from project action", projectId);

  const request = axios
    .get(`/api/projects/${projectId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return {
    type: FETCH_SINGLE_PROJECT,
    payload: request
  };
};
