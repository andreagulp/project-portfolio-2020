import React, { useEffect } from "react";
import StackedBarChart from "../components/metrics/StackedBarChart";
import { useDispatch, useSelector } from "react-redux";
import { selectMetricsByMarket } from "../selectors/marketMetrics_selector";
import {
  selectTotalDeployed,
  selectTotalInProgress,
  selectTotalBacklog
} from "../selectors/summaryMetrics_selector";
import { selectMetricsByBrand } from "../selectors/brandMetrics_selector";

import { fetchProjects } from "../actions/project_action";
import Grid from "@material-ui/core/Grid";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects = useSelector(state => state.projects);

  const totalDeployed = useSelector(selectTotalDeployed);
  const totalInProgress = useSelector(selectTotalInProgress);
  const totalBacklog = useSelector(selectTotalBacklog);
  const chartByMarketData = useSelector(selectMetricsByMarket);
  const chartByBrandData = useSelector(selectMetricsByBrand);

  console.log("totalDeployed", totalDeployed);
  console.log("selectTotalInProgress", totalInProgress);
  console.log("selectTotalBacklog", totalBacklog);
  console.log("selectMetricsByMarket", chartByMarketData);
  console.log("chartByBrandData", chartByBrandData.dataChart);

  return (
    <Grid container spacing={3}>
      <StackedBarChart
        title="Hours by Market and Status"
        data={chartByMarketData.dataChart}
      />
      <StackedBarChart
        title="Hours by Brand and Status"
        data={chartByBrandData.dataChart}
      />
    </Grid>
  );
}

export default Dashboard;
