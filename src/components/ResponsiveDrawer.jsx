import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, ListItemIcon, Toolbar, Typography, SwipeableDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ClassIcon from '@mui/icons-material/Class';
import HouseIcon from '@mui/icons-material/House';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: 'Home',
      icon: <HouseIcon />,
      onClick: '/',
    },
    {
      text: 'Rooms',
      icon: <BedroomParentIcon />,
      onClick: '/rooms',
    },
    {
      text: 'Reserve',
      icon: <BookOnlineIcon />,
      onClick: '/reserve',
    },
    {
      text: 'My Reserves',
      icon: <ClassIcon />,
      onClick: '/my-reserves',
    },
  ];
  const adminItems = [
    {
      text: 'Create Room',
      icon: <MeetingRoomIcon />,
      onClick: '/create-rooms',
    },
    {
      text: 'Delete Room',
      icon: <NoMeetingRoomIcon />,
      onClick: '/delete-room',
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
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
              <ListItemButton href={onClick}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
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
              <ListItemButton href={onClick}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
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
          <Typography variant="h6" noWrap component="div">
            Rent a Room
          </Typography>
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
