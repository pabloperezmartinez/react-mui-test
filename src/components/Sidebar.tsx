// SideBar.tsx
import { Box, Divider, Drawer, IconButton, List, ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Link } from 'react-router-dom';

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface SideBarProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  items: MenuItem[];
}

const SideBar: React.FC<SideBarProps> = ({ drawerOpen, toggleDrawer, items }) => {
  const midPoint = Math.ceil(items.length / 2);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon/>
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {items.slice(0, midPoint).map((item) => (
              <ListItemButton component={Link} to={item.href} key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            {items.slice(midPoint).map((item) => (
              <ListItemButton component={Link} to={item.href} key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
