import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import ColumnForm from "PersonalKanban/components/ColumnForm";

type AddColumnButtonProps = {};

const AddColumnButton: React.FC<AddColumnButtonProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseDialog = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleSubmit = React.useCallback(() => {}, []);

  return (
    <Box display="block" marginBottom={2}>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add Column
      </Button>
      <Dialog onClose={handleCloseDialog} open={open}>
        <DialogContent>
          <ColumnForm
            column={{}}
            onSubmit={handleSubmit}
            onCancel={handleCloseDialog}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddColumnButton;
