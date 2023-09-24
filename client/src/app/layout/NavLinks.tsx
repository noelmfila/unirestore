import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ILinks } from "../interface/links";
import { navStyles } from "../interface/navStyles";

export const NavLinks = ({ links }: ILinks) => {
  return (
    <List sx={{ display: "flex" }}>
      {links.map(({ title, path }) => (
        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
          {title.toUpperCase()}
        </ListItem>
      ))}
    </List>
  );
};
