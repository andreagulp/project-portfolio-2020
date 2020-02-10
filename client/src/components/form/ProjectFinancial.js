import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";
import FunctionsIcon from "@material-ui/icons/Functions";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { markets } from "../../assets/formConfig";
import SelectField from "./SelectField";
import InputField from "./InputField";
import EditBenefitDialog from "./EditBenefitDialog";

const useStyles = makeStyles(theme => ({
  headerName: {
    paddingTop: theme.spacing(5)
  },
  headerFinancial: {
    paddingTop: theme.spacing(2)
  },
  button: {
    // marginTop: theme.spacing(2)
    float: "right"
  },
  divider: {
    backgroundColor: "white"
  }
}));

function ProjectFinancial({
  handleFieldMktHoursChange,
  newMarketHours,
  addBenefit,
  handleRemoveBenefit,
  handleEditBenefit,
  benefitsByMkt,
  totHours,
  editedBenefit,
  handleEditableBenefitChange,
  handleUpdateBenefits
}) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = mkt => {
    handleEditBenefit(mkt);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    handleUpdateBenefits();
    setOpenDialog(false);
  };

  return (
    <>
      {/* <Grid container spacing={3}> */}
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" gutterBottom className={classes.headerName}>
          Project Financial
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={8} sm={8}>
          <SelectField
            handleFieldChange={handleFieldMktHoursChange}
            values={newMarketHours.name}
            label="Market"
            name="name"
            menuItems={markets}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <form onSubmit={addBenefit}>
            <InputField
              name="hours"
              label="Hours"
              placeholder="0"
              type="number"
              values={newMarketHours.hours}
              handleFieldChange={handleFieldMktHoursChange}
              onKeyDown={addBenefit}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addBenefit}
          >
            ADD BENEFITS
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
          <List dense={true}>
            {benefitsByMkt.map(mkt => {
              return (
                <ListItem key={mkt._id}>
                  <ListItemText primary={`${mkt.name} | ${mkt.hours} hs`} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleDialogOpen(mkt)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={e => handleRemoveBenefit(e, mkt._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            <Divider />

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FunctionsIcon color="primary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${totHours} Total hours`} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      {/* </Grid> */}
      <Divider />

      <EditBenefitDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        editedBenefit={editedBenefit}
        handleEditableBenefitChange={handleEditableBenefitChange}
        handleUpdateBenefits={handleUpdateBenefits}
      />
    </>
  );
}

export default ProjectFinancial;
