import React, { useEffect } from "react";
import ChartByMarket from "../components/metrics/ChartByMarket";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalDeployed,
  selectTotalInProgress,
  selectTotalBacklog,
  selectMetricsByMarket
} from "../selectors/marketMetrics_selector";
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

  console.log("totalDeployed", totalDeployed);
  console.log("selectTotalInProgress", totalInProgress);
  console.log("selectTotalBacklog", totalBacklog);
  console.log("selectMetricsByMarket", chartByMarketData);

  return (
    <Grid container spacing={3}>
      <ChartByMarket
        title="Hours by Market and Status"
        data={chartByMarketData.dataChart}
      />
    </Grid>
  );
}

export default Dashboard;
