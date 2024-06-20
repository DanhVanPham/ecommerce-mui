import { IconButton, Menu, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import { MENU_ITEM, menuAuthAccount } from "./constants";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "../routes/paths";

const AccountButton = () => {
  const router = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (item) => {
    const { value, url } = item ?? {};
    console.log(url, value);
    switch (value) {
      case MENU_ITEM.signIn:
      case MENU_ITEM.signUp:
      case MENU_ITEM.myAccount:
      case MENU_ITEM.purchaseOrder:
        router(url);
        break;
      case MENU_ITEM.logout:
        // Handle logout
        router(PATH_AUTH.login);
        break;
      default:
        break;
    }
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonOutlineIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuAuthAccount.map((menuItem) => (
          <MenuItem key={menuItem.id} onClick={() => handleClickItem(menuItem)}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AccountButton;
