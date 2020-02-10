import { createSelector } from "reselect";

const getProjects = state => state.projects;

export const getProjectForTable = createSelector([getProjects], projects => {
  let projectsForTable = [];

  projects.map(project => {
    projectsForTable = [
      ...projectsForTable,
      [
        project.title,
        project.issueid,
        project.projectManager,
        project.developer,
        project.brand,
        project.team,
        project.status,
        project.benefitsFullYear,
        project.estimatedMvpDate
      ]
    ];
  });
  return projectsForTable;
});
