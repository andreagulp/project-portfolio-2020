import { combineReducers } from "redux";

import user from "./user_reducer";
import project from "./project_reducer";
import projects from "./projects_reducer";

const rootReducers = combineReducers({
  user,
  project,
  projects
});

export default rootReducers;
