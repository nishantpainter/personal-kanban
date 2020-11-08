import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Column from "PersonalKanban/components/Column";
import { Column as ColumnType } from "PersonalKanban/types";
import { COLUMN_WIDTH } from "PersonalKanban/constants";

const useBoardStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    width: "fit-content",
  },
  column: {
    width: COLUMN_WIDTH,
    margin: theme.spacing(),
    height: "fit-content",
  },
}));

type BoardProps = {
  columns: ColumnType[];
  innerRef: any;
  ColumnComponent: any;
  placeholder?: any;
  onColumnEdit?: any;
  onColumnDelete?: any;
};

const Board: React.FC<BoardProps> = (props) => {
  const {
    columns,
    innerRef,
    ColumnComponent = Column,
    placeholder,
    onColumnEdit,
    onColumnDelete,
    ...rest
  } = props;

  const classes = useBoardStyles();

  return (
    <div className={classes.root} ref={innerRef} {...rest}>
      {columns && columns.length ? (
        columns.map((column, index) => (
          <ColumnComponent
            index={index}
            key={column.id}
            column={column}
            className={classes.column}
            onEdit={onColumnEdit}
            onDelete={onColumnDelete}
          />
        ))
      ) : (
        <Typography>No columns available.</Typography>
      )}
      {placeholder}
    </div>
  );
};

export default Board;
