import React from "react";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  },
  headerFinancial: {
    paddingTop: theme.spacing(2)
  }
}));

function ProjectFinancial({ stateTable, setStateTable, totHours }) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Financial
        </Typography>
        <MaterialTable
          title="Benefits"
          columns={stateTable.columns}
          data={stateTable.data}
          style={{ marginTop: 28, width: "100%" }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setStateTable(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setStateTable(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setStateTable(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }}
        />
      </Grid>
      <div>
        <Typography
          variant="h5"
          gutterBottom
          className={classes.headerFinancial}
        >
          Total Hours = {totHours}
        </Typography>
      </div>
    </>
  );
}

export default ProjectFinancial;
