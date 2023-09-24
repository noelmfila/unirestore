import { AppBar, Toolbar, Typography } from "@mui/material";
import { ToggleMode } from "./ToggleMode";
import { IToggleSwitch } from "../interface/toggleSwitch";

export const Header = ({ darkMode, handleToggleSwitch }: IToggleSwitch) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">ReStore</Typography>
        <ToggleMode
          darkMode={darkMode}
          handleToggleSwitch={handleToggleSwitch}
        />
      </Toolbar>
    </AppBar>
  );
};
