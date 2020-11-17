import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useTranslation } from "PersonalKanban/providers/TranslationProvider";
import IconButton from "PersonalKanban/components/IconButton";

type LanguageButtonProps = {};

const LanguageButton: React.FC<LanguageButtonProps> = (props) => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <>
      <IconButton
        icon={"language"}
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleChangeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={handleChangeLanguage("fr")}>Français</MenuItem>
        <MenuItem onClick={handleChangeLanguage("es")}>Español</MenuItem>
        <MenuItem onClick={handleChangeLanguage("ru")}>Pусский</MenuItem>
        <MenuItem onClick={handleChangeLanguage("de")}>Deutsche</MenuItem>
        <MenuItem onClick={handleChangeLanguage("in")}>हिंदी</MenuItem>
        <MenuItem onClick={handleChangeLanguage("cn")}>中文</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageButton;
