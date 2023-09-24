import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ToggleMode } from "./ToggleMode";
import { IToggleSwitch } from "../interface/toggleSwitch";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { Cart } from "./Cart";
import { navStyles } from "../interface/navStyles";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "contact", path: "/contact" },
  { title: "about", path: "/about" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export const Header = ({ darkMode, handleToggleSwitch }: IToggleSwitch) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            RE-STORE
          </Typography>
          <ToggleMode
            darkMode={darkMode}
            handleToggleSwitch={handleToggleSwitch}
          />
        </Box>
        <NavLinks links={midLinks} />
        <Box display="flex" alignItems="center">
          <Cart />
          <NavLinks links={rightLinks} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
