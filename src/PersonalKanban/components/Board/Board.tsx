import React from "react";
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
};

const Board: React.FC<BoardProps> = (props) => {
  const { columns, innerRef, ColumnComponent = Column, ...rest } = props;

  const classes = useBoardStyles();

  return (
    <div className={classes.root} ref={innerRef} {...rest}>
      {columns && columns.length
        ? columns.map((column) => (
            <ColumnComponent
              key={column.id}
              column={column}
              className={classes.column}
            />
          ))
        : null}
    </div>
  );
};

export default Board;
