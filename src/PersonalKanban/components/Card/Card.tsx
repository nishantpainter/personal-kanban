import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Record } from "PersonalKanban/types";

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
  },
}));

type CardProps = {
  record: Record;
  className?: string;
  style?: any;
  innerRef?: any;
};

const Card: React.FC<CardProps> = (props) => {
  const { record, className, innerRef, style } = props;
  const { title, description, caption } = record;

  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.paper, className)}
      style={style}
      ref={innerRef}
    >
      <Typography title={title} gutterBottom noWrap>
        <b>{title}</b>
      </Typography>
      <Typography
        title={description}
        className={classes.description}
        variant="body2"
        gutterBottom
      >
        {description}
      </Typography>
      <Typography component="p" variant="caption" noWrap>
        {caption}
      </Typography>
    </Paper>
  );
};

export default Card;
