import { Switch } from "@mui/material";
import { IToggleSwitch } from "../interface/toggleSwitch";

export const ToggleMode = ({ darkMode, handleToggleSwitch }: IToggleSwitch) => {
  return <Switch checked={darkMode} onChange={handleToggleSwitch} />;
};
