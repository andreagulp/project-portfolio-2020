import { createSelector } from "reselect";
import _ from "lodash";

import { brand } from "../assets/formConfig";

const getProjects = state => state.projects;

export const selectMetricsByBrand = createSelector([getProjects], projects => {
  // completed project by brand
  const completedPj = projects.filter(x => x.status === "Completed");

  const hoursCompletedByBrand = _(completedPj)
    .groupBy("brand")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "benefitsFullYear")
    }))
    .value();

  // inprogress project by brand
  const inProgressPj = projects.filter(x => x.status === "In Progress");

  const hoursInProgressByBrand = _(inProgressPj)
    .groupBy("brand")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "benefitsFullYear")
    }))
    .value();

  // backlog project by brand
  const backlogPj = projects.filter(x => x.status === "Backlog");

  const hoursBacklogByBrand = _(backlogPj)
    .groupBy("brand")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "benefitsFullYear")
    }))
    .value();

  const dataChart = brand.map(mkt => {
    return {
      name: mkt.name,
      backlog:
        hoursBacklogByBrand
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0,
      inProgress:
        hoursInProgressByBrand
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0,
      completed:
        hoursCompletedByBrand
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0
    };
  });

  return {
    dataChart
  };
});
