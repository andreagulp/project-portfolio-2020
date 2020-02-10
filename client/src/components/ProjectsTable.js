import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const columns = [
  "Title",
  "issueid",
  "projectManager",
  "developer",
  "brand",
  "team",
  "status",
  "benefitsFullYear",
  "estimatedMvpDate"
];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
  selectableRows: false
};

function ProjectsTable({ projectsForTable }) {
  const classes = useStyles();

  const data = projectsForTable;
  return (
    <MUIDataTable
      title={"Kaizen Projects"}
      data={data}
      columns={columns}
      options={options}
      selectableRows={false}
      serverSide={true}
      className={classes.root}
    />
  );
}

export default ProjectsTable;
