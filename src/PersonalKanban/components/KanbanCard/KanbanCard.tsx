import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Color } from "PersonalKanban/enums";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 150,
    width: 300,
    backgroundColor: (props: any) =>
      theme.custom.colors.pastel[props.color] || "unset",
  },
  description: {
    minHeight: "4.5rem",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));

type KanbanCardProps = {
  title: string;
  description?: string;
  caption?: string;
  color?: Color;
};

const KanbanCard: React.FC<KanbanCardProps> = (props) => {
  const { title, description, caption, color } = props;
  const classes = useStyles({ color });

  return (
    <Paper className={classes.paper}>
      <Typography title={title} variant="h6" gutterBottom noWrap>
        {title}
      </Typography>
      <Typography className={classes.description} gutterBottom>
        {description}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {caption}
      </Typography>
    </Paper>
  );
};

export default KanbanCard;
