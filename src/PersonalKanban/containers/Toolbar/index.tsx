import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import MuiToolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useTranslation } from "PersonalKanban/providers/TranslationProvider";
import ColumnForm from "PersonalKanban/components/ColumnForm";
import IconButton from "PersonalKanban/components/IconButton";
import { Column } from "PersonalKanban/types";
import { useTheme } from "PersonalKanban/providers/ThemeProvider";
import { makeStyles } from "@material-ui/core";

type AddColumnButtonProps = {
  onSubmit: any;
};

const AddColumnButton: React.FC<AddColumnButtonProps> = (props) => {
  const { onSubmit } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseDialog = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleSubmit = React.useCallback(
    (column: Column) => {
      onSubmit({ column });
      handleCloseDialog();
    },
    [onSubmit, handleCloseDialog]
  );

  return (
    <Box display="block">
      <IconButton icon="add" color="inherit" onClick={handleOpenDialog}>
        Add Column
      </IconButton>
      <Dialog onClose={handleCloseDialog} open={open}>
        <DialogContent>
          <ColumnForm onSubmit={handleSubmit} onCancel={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

type ClearBoardButtonProps = {
  onClear: any;
  disabled?: boolean;
};

const ClearBoardButton: React.FC<ClearBoardButtonProps> = (props) => {
  const { disabled, onClear } = props;

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
    <Box display="flex">
      <IconButton
        icon="delete"
        color="inherit"
        disabled={disabled}
        onClick={handleOpenDialog}
      ></IconButton>
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

type LanguageButtonProps = {};

const LanguageButton: React.FC<LanguageButtonProps> = (props) => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <Box display="block">
      <IconButton
        icon={"language"}
        aria-controls="language-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      />
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleChangeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={handleChangeLanguage("fr")}>Français</MenuItem>
        <MenuItem onClick={handleChangeLanguage("es")}>Español</MenuItem>
        <MenuItem onClick={handleChangeLanguage("ru")}>Pусский</MenuItem>
        <MenuItem onClick={handleChangeLanguage("de")}>Deutsche</MenuItem>
        <MenuItem onClick={handleChangeLanguage("in")}>हिंदी</MenuItem>
        <MenuItem onClick={handleChangeLanguage("cn")}>中文</MenuItem>
      </Menu>
    </Box>
  );
};

const useToolbarStyles = makeStyles(() => ({
  paper: {
    padding: 0,
  },
}));

type ToolbarProps = {
  clearButtonDisabled?: boolean;
  onNewColumn: any;
  onClearBoard: any;
};

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { clearButtonDisabled, onNewColumn, onClearBoard } = props;

  const { darkTheme, handleToggleDarkTheme } = useTheme();

  const classes = useToolbarStyles();

  return (
    <AppBar color="default" className={classes.paper}>
      <MuiToolbar>
        <AddColumnButton onSubmit={onNewColumn} />
        &nbsp;
        <ClearBoardButton
          disabled={clearButtonDisabled}
          onClear={onClearBoard}
        />
        &nbsp;
        <IconButton
          color="inherit"
          icon={darkTheme ? "invertColors" : "invertColorsOff"}
          onClick={handleToggleDarkTheme}
        />
        &nbsp;
        <LanguageButton />
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
