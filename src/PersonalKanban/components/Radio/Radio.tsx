import React from "react";
import MuiRadio, { RadioProps as MuiRadioProps } from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: (props: any) => props.color,
  },
  checked: {},
}));

type RadioProps = Omit<MuiRadioProps, "color"> & { color?: string };

const Radio = React.forwardRef((props: RadioProps, ref: any) => {
  const { color, ...rest } = props;

  const classes = useStyles({ color });

  return (
    <MuiRadio
      ref={ref}
      color="default"
      classes={color ? classes : {}}
      {...rest}
    />
  );
});

export default Radio;
