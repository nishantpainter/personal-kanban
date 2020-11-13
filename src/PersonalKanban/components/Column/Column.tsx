import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core";

import Card from "PersonalKanban/components/Card";
import IconButton from "PersonalKanban/components/IconButton";
import ColumnForm from "PersonalKanban/components/ColumnForm";
import RecordForm from "PersonalKanban/components/RecordForm";
import { Record, Column as ColumnType } from "PersonalKanban/types";

const useColumnHeaderStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
}));

type ColumnHeaderProps = {
  title: string;
  description?: string;
};

export const ColumnHeader: React.FC<ColumnHeaderProps> = (props) => {
  const { title, description } = props;

  const classes = useColumnHeaderStyles();
  return (
    <>
      <Typography
        variant="h5"
        title={title}
        gutterBottom={Boolean(description)}
        noWrap
      >
        {title}
      </Typography>
      <Typography title={description} noWrap gutterBottom>
        {description}
      </Typography>
      <Divider className={classes.divider} />
    </>
  );
};

const useColumnActionStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
}));

type ColumnActionProps = {
  onEdit?: any;
  onDelete?: any;
  onAddRecord?: any;
  showEditAction?: boolean;
  showDeleteAction?: boolean;
  showAddRecordAction?: boolean;
};

export const ColumnAction: React.FC<ColumnActionProps> = (props) => {
  const {
    showEditAction,
    showDeleteAction,
    showAddRecordAction,
    onEdit,
    onDelete,
    onAddRecord,
  } = props;
  const classes = useColumnActionStyles();
  return (
    <>
      {showAddRecordAction && <IconButton icon="add" onClick={onAddRecord} />}
      {showEditAction && <IconButton icon="edit" onClick={onEdit} />}
      {showDeleteAction && <IconButton icon="delete" onClick={onDelete} />}
      <Divider className={classes.divider} />
    </>
  );
};

ColumnAction.defaultProps = {
  showEditAction: true,
  showDeleteAction: true,
  showAddRecordAction: true,
};

const useColumnCardListStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(),
  },
}));

type ColumnCardListProps = {
  column: ColumnType;
  innerRef?: any;
  CardComponent?: any;
  onRecordEdit?: any;
  onRecordDelete?: any;
};

export const ColumnCardList: React.FC<ColumnCardListProps> = (props) => {
  const {
    column,
    innerRef,
    CardComponent = Card,
    onRecordEdit,
    onRecordDelete,
  } = props;
  const { records = [] } = column;

  const classes = useColumnCardListStyles();

  return (
    <div ref={innerRef}>
      {records && records.length ? (
        records.map((record: Record, index) => (
          <CardComponent
            key={record.id}
            record={record}
            className={classes.card}
            index={index}
            onEdit={onRecordEdit}
            onDelete={onRecordDelete}
          />
        ))
      ) : (
        <Typography>No records available.</Typography>
      )}
    </div>
  );
};

const useColumnFooterStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
}));

type ColumnFooterProps = {
  content?: string;
};

export const ColumnFooter: React.FC<ColumnFooterProps> = (props) => {
  const { content } = props;

  const classes = useColumnFooterStyles();
  return (
    <>
      <Divider className={classes.divider} />
      <Typography variant="caption" component="p" title={content} noWrap>
        {content}
      </Typography>
    </>
  );
};

type ColumnProps = {
  column: ColumnType;
  className?: string;
  innerRef?: any;
  onEdit?: any;
  onDelete?: any;
  onAddRecord?: any;
  onRecordEdit?: any;
  onRecordDelete?: any;
  showEditAction?: boolean;
  showDeleteAction?: boolean;
  showAddRecordAction?: boolean;
  ColumnHeaderComponent?: any;
  ColumnActionComponent?: any;
  ColumnCardListComponent?: any;
  ColumnFooterComponent?: any;
};

const Column: React.FC<ColumnProps> = (props) => {
  const {
    column,
    className,
    innerRef,
    onEdit,
    onDelete,
    onAddRecord,
    showDeleteAction,
    showEditAction,
    onRecordEdit,
    onRecordDelete,
    showAddRecordAction,
    ColumnHeaderComponent = ColumnHeader,
    ColumnActionComponent = ColumnAction,
    ColumnCardListComponent = ColumnCardList,
    ColumnFooterComponent = ColumnFooter,
    ...rest
  } = props;
  const { title, description, caption } = column;

  const [dialog, setDialog] = React.useState({
    open: false,
    title: "",
    content: null,
    actions: null,
  });

  const handleDelete = React.useCallback(
    (e) => {
      onDelete && onDelete({ column, e });
    },
    [column, onDelete]
  );

  const handleEdit = React.useCallback(
    (column: ColumnType) => {
      onEdit && onEdit({ column });
    },
    [onEdit]
  );

  const handleAddRecord = React.useCallback(
    (record: Record) => {
      onAddRecord && onAddRecord({ column, record });
    },
    [column, onAddRecord]
  );

  const handleRecordEdit = React.useCallback(
    (record: Record) => {
      onRecordEdit({ column, record });
    },
    [column, onRecordEdit]
  );

  const handleRecordDelete = React.useCallback(
    (record: Record) => {
      onRecordDelete({ column, record });
    },
    [column, onRecordDelete]
  );

  const handleOpenDialog = React.useCallback(({ content, title, actions }) => {
    setDialog({ content, title, actions, open: true });
  }, []);

  const handleCloseDialog = React.useCallback(() => {
    setDialog(() => ({ content: null, title: "", actions: null, open: false }));
  }, []);

  const handleOpenDeleteDialog = React.useCallback(() => {
    const content = <Typography>Do you want to delete column ?</Typography>;
    const actions = (
      <>
        <Button onClick={handleCloseDialog}>Cancel</Button>&nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleCloseDialog();
            handleDelete(e);
          }}
        >
          Delete
        </Button>
      </>
    );

    handleOpenDialog({ content, actions, title: "Delete Column" });
  }, [handleOpenDialog, handleDelete, handleCloseDialog]);

  const handleOpenEditDialog = React.useCallback(() => {
    const content = (
      <ColumnForm
        column={column}
        formTitle="Edit Column"
        onSubmit={(column: any) => {
          handleCloseDialog();
          handleEdit(column);
        }}
        onCancel={handleCloseDialog}
      ></ColumnForm>
    );

    handleOpenDialog({ content });
  }, [column, handleOpenDialog, handleCloseDialog, handleEdit]);

  const handleOpenAddRecordDialog = React.useCallback(() => {
    const content = (
      <RecordForm
        onSubmit={(record: Record) => {
          handleCloseDialog();
          handleAddRecord(record);
        }}
        onCancel={handleCloseDialog}
      ></RecordForm>
    );

    handleOpenDialog({ content });
  }, [handleOpenDialog, handleCloseDialog, handleAddRecord]);

  const handleOpenEditRecordDialog = React.useCallback(
    (record: Record) => {
      const content = (
        <RecordForm
          record={record}
          onSubmit={(record: Record) => {
            handleCloseDialog();
            handleRecordEdit(record);
          }}
          onCancel={handleCloseDialog}
        ></RecordForm>
      );

      handleOpenDialog({ content });
    },
    [handleOpenDialog, handleCloseDialog, handleRecordEdit]
  );

  return (
    <Paper elevation={4} className={className} ref={innerRef} {...rest}>
      <ColumnHeaderComponent title={title} description={description} />
      <ColumnActionComponent
        showEditAction={showEditAction}
        showDeleteAction={showDeleteAction}
        showAddRecordAction={showAddRecordAction}
        onEdit={handleOpenEditDialog}
        onDelete={handleOpenDeleteDialog}
        onAddRecord={handleOpenAddRecordDialog}
      />
      <ColumnCardListComponent
        column={column}
        onRecordEdit={handleOpenEditRecordDialog}
        onRecordDelete={handleRecordDelete}
      />
      <ColumnFooterComponent content={caption} />
      <Dialog open={dialog.open} onClose={handleCloseDialog}>
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent>{dialog.content}</DialogContent>
        <DialogActions>{dialog.actions}</DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Column;
