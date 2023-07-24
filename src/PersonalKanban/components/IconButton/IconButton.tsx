import React from "react";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import InvertColorsOffIcon from "@material-ui/icons/InvertColorsOff";
import LanguageIcon from "@material-ui/icons/Translate";
import GitHubIcon from "@material-ui/icons/GitHub";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import InfoIcon from "@material-ui/icons/Info";
import ListIcon from "@material-ui/icons/List";

const icons = {
  edit: EditIcon,
  delete: DeleteIcon,
  add: AddIcon,
  deleteSweep: DeleteSweepIcon,
  deleteForever: DeleteForeverIcon,
  invertColors: InvertColorsIcon,
  invertColorsOff: InvertColorsOffIcon,
  gitHub: GitHubIcon,
  language: LanguageIcon,
  personalKanban: DeveloperBoardIcon,
  info: InfoIcon,
  list: ListIcon,
};

type IconButtonProps = MuiIconButtonProps & {
  icon: keyof typeof icons;
  iconProps?: any;
  component?: any;
  href?: string;
  target?: string;
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, iconProps = {}, ...rest } = props;
  const Icon = icons[icon];
  return Icon ? (
    <MuiIconButton size="small" {...rest}>
      <Icon fontSize="small" {...iconProps} />
    </MuiIconButton>
  ) : null;
};

export default IconButton;
