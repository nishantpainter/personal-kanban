import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

import { Column } from "PersonalKanban/types";
import { ColumnColor } from "PersonalKanban/enums/index";
import Radio from "PersonalKanban/components/Radio";
import { useTranslation } from "PersonalKanban/providers/TranslationProvider";

type ColumnFormProps = {
  column?: Partial<Column>;
  onSubmit: any;
  onCancel: any;
  disabled?: boolean;
  formTitle?: string;
};

const ColumnForm: React.FC<ColumnFormProps> = (props) => {
  const { t } = useTranslation();

  const {
    column,
    disabled,
    formTitle = t("addColumn"),
    onSubmit,
    onCancel,
  } = props;

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: Object.assign(
      {
        title: "",
        description: "",
        color: "",
        wipEnabled: false,
        wipLimit: 0,
      },
      column
    ),
    onSubmit: (values) => {
      onSubmit && onSubmit(values);
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.title) {
        errors.title = t("titleRequired");
      }

      if (values.wipEnabled && !values.wipLimit) {
        errors.wipLimit = t("limitRequired");
      }

      return errors;
    },
  });

  const handleWipLimitChange = React.useCallback(
    (e) => {
      e.persist();
      const { value } = e.target;
      const integerRegex = /^[0-9]*$/;
      if (value && !integerRegex.test(value)) {
        return;
      }

      handleChange(e);
    },
    [handleChange]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6">
            {formTitle}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="title"
            label={t("title")}
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
            label={t("description")}
            value={values.description}
            error={Boolean(errors.description)}
            helperText={errors.description}
            disabled={disabled}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.wipEnabled}
                onChange={handleChange}
                name="wipEnabled"
              />
            }
            label={t("wipLimitEnabled")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="wipLimit"
            label={t("wipLimit")}
            value={values.wipLimit}
            error={Boolean(errors.wipLimit)}
            helperText={errors.wipLimit}
            disabled={disabled || !values.wipEnabled}
            onChange={handleWipLimitChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{t("background")}</FormLabel>
            <RadioGroup
              row
              aria-label="background"
              name="color"
              value={values.color}
              onChange={handleChange}
            >
              {Object.keys(ColumnColor).map((key) => {
                const colorKey = key as keyof typeof ColumnColor;
                return (
                  <Radio
                    key={colorKey}
                    value={colorKey}
                    color={ColumnColor[colorKey]}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" disabled={disabled} onClick={onCancel}>
            {t("cancel")}
          </Button>
          &nbsp;
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={disabled}
          >
            {t("submit")}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ColumnForm;
