import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectField from "./SelectField";
import { markets } from "../../assets/formConfig";
import Grid from "@material-ui/core/Grid";
import InputField from "./InputField";

function EditBenefitDialog({
  openDialog,
  handleDialogClose,
  editedBenefit,
  handleEditableBenefitChange,
  handleUpdateBenefits
}) {
  return (
    <Dialog
      open={openDialog}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={8} sm={8}>
            <SelectField
              handleFieldChange={handleEditableBenefitChange}
              values={editedBenefit.name}
              label="Market"
              name="name"
              menuItems={markets}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <form onSubmit={handleUpdateBenefits}>
              <InputField
                name="hours"
                label="Hours"
                placeholder="0"
                type="number"
                values={editedBenefit.hours}
                handleFieldChange={handleEditableBenefitChange}
              />
            </form>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          back
        </Button>
        <Button onClick={handleDialogClose} color="primary" autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditBenefitDialog;
