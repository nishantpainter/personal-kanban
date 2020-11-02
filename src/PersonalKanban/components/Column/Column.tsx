import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";

import Card from "PersonalKanban/components/Card";
import { Record, Column as ColumnType } from "PersonalKanban/types";

const useColumnHeaderProps = makeStyles((theme) => ({
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

  const classes = useColumnHeaderProps();
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

const useColumnCardListStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(),
  },
}));

type ColumnCardListProps = {
  column: ColumnType;
  innerRef?: any;
  CardComponent?: any;
};

export const ColumnCardList: React.FC<ColumnCardListProps> = (props) => {
  const { column, innerRef, CardComponent = Card } = props;
  const { records = [] } = column;

  const classes = useColumnCardListStyles();

  return (
    <div ref={innerRef}>
      {records && records.length
        ? records.map((record: Record, index) => (
            <CardComponent
              key={record.id}
              record={record}
              className={classes.card}
              index={index}
            />
          ))
        : null}
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
  ColumnHeaderComponent?: any;
  ColumnCardListComponent?: any;
  ColumnFooterComponent?: any;
};

const Column: React.FC<ColumnProps> = (props) => {
  const {
    column,
    className,
    innerRef,
    ColumnHeaderComponent = ColumnHeader,
    ColumnCardListComponent = ColumnCardList,
    ColumnFooterComponent = ColumnFooter,
    ...rest
  } = props;
  const { title, description, caption } = column;
  return (
    <Paper elevation={4} className={className} ref={innerRef} {...rest}>
      <ColumnHeaderComponent title={title} description={description} />
      <ColumnCardListComponent column={column} />
      <ColumnFooterComponent content={caption} />
    </Paper>
  );
};

export default Column;
