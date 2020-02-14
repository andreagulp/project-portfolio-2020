import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Brush,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chartMarket: {
    marginTop: theme.spacing(5)
  }
}));

function ChartByMarket({ data, title }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} className={classes.chartMarket}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" aspect={4.0 / 1.5}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="backlog" stackId="a" fill="#e5b11e" />
          <Bar dataKey="inProgress" stackId="a" fill="#5d86b7" />
          <Bar dataKey="completed" stackId="a" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
}

export default ChartByMarket;
