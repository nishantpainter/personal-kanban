import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Record } from "PersonalKanban/types";
import IconButton from "PersonalKanban/components/IconButton";

const useStyles = makeStyles(() => ({
  paper: {
    height: 150,
  },
  description: {
    maxHeight: "5rem",
    minHeight: "5rem",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    whiteSpace: "pre-line",
  },
}));

type CardProps = {
  record: Record;
  className?: string;
  style?: any;
  innerRef?: any;
  showEditAction?: boolean;
  showDeleteAction?: boolean;
  onDelete?: any;
  onEdit?: any;
};

const Card: React.FC<CardProps> = (props) => {
  const {
    record,
    className,
    innerRef,
    style,
    showEditAction,
    showDeleteAction,
    onDelete,
    onEdit,
    ...rest
  } = props;
  const { title, description, createdAt } = record;

  const classes = useStyles();

  const handleEdit = React.useCallback(() => onEdit(record), [record, onEdit]);

  const handleDelete = React.useCallback(() => onDelete(record), [
    record,
    onDelete,
  ]);

  return (
    <Paper
      className={clsx(classes.paper, className)}
      style={style}
      ref={innerRef}
      {...rest}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography title={title} gutterBottom noWrap>
          <b>{title}</b>
        </Typography>
        <Box display="flex" alignItems="center">
          {showEditAction && <IconButton icon="edit" onClick={handleEdit} />}
          {showDeleteAction && (
            <IconButton icon="deleteForever" onClick={handleDelete} />
          )}
        </Box>
      </Box>
      <Typography
        title={description}
        className={classes.description}
        variant="body2"
        gutterBottom
      >
        {description}
      </Typography>
      <Typography component="p" variant="caption" noWrap>
        {createdAt}
      </Typography>
    </Paper>
  );
};

Card.defaultProps = {
  showDeleteAction: true,
  showEditAction: true,
};

export default Card;
