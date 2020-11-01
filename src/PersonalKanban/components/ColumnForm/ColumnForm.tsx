import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { Column } from "PersonalKanban/types";

type ColumnFormProps = {
  column: Partial<Column>;
  onSubmit: any;
  disabled?: boolean;
};

const ColumnForm: React.FC<ColumnFormProps> = (props) => {
  const { onSubmit, column, disabled } = props;

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: Object.assign({}, column),
    onSubmit: (values) => {
      onSubmit && onSubmit(values);
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.title) {
        errors.title = "Title is required.";
      }
      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            name="title"
            label="Title"
            value={values.title}
            error={Boolean(errors.title)}
            helperText={errors.title}
            disabled={disabled}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={3}
            name="description"
            label="Description"
            value={values.description}
            error={Boolean(errors.description)}
            helperText={errors.description}
            disabled={disabled}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" disabled={disabled}>
            Cancel
          </Button>
          &nbsp;
          <Button color="primary" variant="contained" disabled={disabled}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ColumnForm;
