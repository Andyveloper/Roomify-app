/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box, AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, ListItemIcon, Toolbar, Typography, SwipeableDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ClassIcon from '@mui/icons-material/Class';

import logo from '../assets/img/logo.png';

import Logout from './Logout';

const drawerWidth = 240;
const useStyles = {
  maxWidth: drawerWidth,
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: 'Rooms',
      icon: <BedroomParentIcon />,
      onClick: '/',
    },
    {
      text: 'Reserve',
      icon: <BookOnlineIcon />,
      onClick: '/reserve',
    },
    {
      text: 'My Reservations',
      icon: <ClassIcon />,
      onClick: '/my-reservations',
    },
  ];
  const adminItems = [];
  const isAdmin = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo.role === 'admin') {
      adminItems.push({
        text: 'Create Room',
        icon: <MeetingRoomIcon />,
        onClick: '/create-room',
      },
      {
        text: 'Delete Room',
        icon: <NoMeetingRoomIcon />,
        onClick: '/delete-room',
      });
    }
    return adminItems;
  };
  isAdmin();
  const drawer = (
    <div>
      <img style={useStyles} src={logo} alt="logo" />
      <Divider />
      <List>
        <Box p={2} width="200px" textAlign="left" role="presentation">
          <Typography variant="h5" noWrap component="div">
            Options
          </Typography>
        </Box>
        {menuItems.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem key={text} disablePadding>
              <Link className="menu_links" to={onClick}>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {adminItems.length !== 0
          ? (
            <Box p={2} width="200px" textAlign="left" role="presentation">
              <Typography variant="h5" noWrap component="div">
                Admin Options
              </Typography>
            </Box>
          )
          : <div />}
        {adminItems.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem key={text} disablePadding>
              <Link className="menu_links" to={onClick}>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Logout />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SwipeableDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </SwipeableDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func.isRequired,
};

export default ResponsiveDrawer;
