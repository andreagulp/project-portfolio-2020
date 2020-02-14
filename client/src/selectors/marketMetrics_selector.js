import { createSelector } from "reselect";
import _ from "lodash";

import { markets } from "../assets/formConfig";

const getProjects = state => state.projects;

export const selectMetricsByMarket = createSelector([getProjects], projects => {
  // completed project by market
  const completedPj = projects
    .filter(x => x.status === "Completed")
    .map(y => y.benefitsByMarket);
  const concatCompletedPj = [].concat.apply([], completedPj);

  const hoursCompletedByMarket = _(concatCompletedPj)
    .groupBy("name")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "hours")
    }))
    .value();

  // inprogress project by market
  const inProgressPj = projects
    .filter(x => x.status === "In Progress")
    .map(y => y.benefitsByMarket);
  const concatInProgressPj = [].concat.apply([], inProgressPj);

  const hoursInProgressByMarket = _(concatInProgressPj)
    .groupBy("name")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "hours")
    }))
    .value();

  // backlog project by market
  const backlogPj = projects
    .filter(x => x.status === "Backlog")
    .map(y => y.benefitsByMarket);
  const concatBacklogPj = [].concat.apply([], backlogPj);

  const hoursBacklogByMarket = _(concatBacklogPj)
    .groupBy("name")
    .map((objs, key) => ({
      name: key,
      hours: _.sumBy(objs, "hours")
    }))
    .value();

  const dataChart = markets.map(mkt => {
    return {
      name: mkt.name,
      backlog:
        hoursBacklogByMarket
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0,
      inProgress:
        hoursInProgressByMarket
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0,
      completed:
        hoursCompletedByMarket
          .filter(x => x.name === mkt.name)
          .map(y => y.hours)[0] || 0
    };
  });

  return {
    hoursCompletedByMarket,
    hoursInProgressByMarket,
    hoursBacklogByMarket,
    dataChart
  };
});
