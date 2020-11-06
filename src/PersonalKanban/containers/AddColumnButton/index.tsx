import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

type AddColumnButtonProps = {};

const AddColumnButton: React.FC<AddColumnButtonProps> = (props) => {
  return (
    <Box display="block" marginBottom={2}>
      <Button variant="contained" color="primary">
        Add Column
      </Button>
    </Box>
  );
};

export default AddColumnButton;
