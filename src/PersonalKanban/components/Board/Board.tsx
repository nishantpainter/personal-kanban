import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Column from "PersonalKanban/components/Column";
import { useTranslation } from "PersonalKanban/providers/TranslationProvider";
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
  onAddRecord?: any;
  onRecordEdit?: any;
  onRecordDelete?: any;
  onAllRecordDelete?: any;
};

const Board: React.FC<BoardProps> = (props) => {
  const {
    columns,
    innerRef,
    ColumnComponent = Column,
    placeholder,
    onColumnEdit,
    onColumnDelete,
    onAddRecord,
    onRecordEdit,
    onRecordDelete,
    onAllRecordDelete,
    ...rest
  } = props;

  const classes = useBoardStyles();

  const { t } = useTranslation();

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
            onAddRecord={onAddRecord}
            onRecordEdit={onRecordEdit}
            onRecordDelete={onRecordDelete}
            onAllRecordDelete={onAllRecordDelete}
          />
        ))
      ) : (
        <Typography>{t("noColumn")}</Typography>
      )}
      {placeholder}
    </div>
  );
};

export default Board;
