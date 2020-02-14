import { createSelector } from "reselect";
import _ from "lodash";

const getProjects = state => state.projects;

export const selectTotalDeployed = createSelector([getProjects], projects => {
  const deliveredProjects = projects.filter(x => x.status === "Completed");
  const totalDeployed = deliveredProjects.reduce(
    (a, b) => parseInt(a) + parseInt(b.benefitsFullYear),
    0
  );
  return totalDeployed;
});

export const selectTotalInProgress = createSelector([getProjects], projects => {
  const inProgressProjects = projects.filter(x => x.status === "In Progress");
  const totalInProgress = inProgressProjects.reduce(
    (a, b) => parseInt(a) + parseInt(b.benefitsFullYear),
    0
  );
  return totalInProgress;
});

export const selectTotalBacklog = createSelector([getProjects], projects => {
  const backlogProjects = projects.filter(x => x.status === "Backlog");
  const totalBacklog = backlogProjects.reduce(
    (a, b) => parseInt(a) + parseInt(b.benefitsFullYear),
    0
  );
  return totalBacklog;
});
