import axios from "axios";
import { ADD_PROJECT, FETCH_PROJECTS } from "./types";

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

  return;
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
