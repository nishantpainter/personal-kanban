import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

type ClearBoardButtonProps = {
  onClear: any;
};

const ClearBoardButton: React.FC<ClearBoardButtonProps> = (props) => {
  const { onClear } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseDialog = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleClear = React.useCallback(
    (e) => {
      onClear({ e });
      handleCloseDialog();
    },
    [onClear, handleCloseDialog]
  );

  return (
    <Box display="block" marginBottom={2}>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Clear Board
      </Button>
      <Dialog onClose={handleCloseDialog} open={open}>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h6">
                Clear Board
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                Do you want to remove all columns and records ?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleCloseDialog}>
                Cancel
              </Button>
              &nbsp;
              <Button color="primary" variant="contained" onClick={handleClear}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ClearBoardButton;
