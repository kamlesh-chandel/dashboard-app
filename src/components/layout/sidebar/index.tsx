import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Stack,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoutIcon from '@mui/icons-material/Logout';

import { Button } from '@/components/common/button';
import { ROUTES, NAV_ITEMS } from '@/utils/routes';

import './index.css';
import '@/styles/theme.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState<boolean>(false);

  const handleNavigate = (path: string): void => {
    navigate(path);
    setOpen(false);
  };

  const handleLogout = (): void => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate(ROUTES.LOGIN);
  };

  const sidebarContent = (
    <Box
      sx={{
        height: '100%',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Typography
          variant="h5"
          fontWeight={800}
          mt={5}
          mb={3}
          ml={3}
          sx={{ color: 'var(--color-heading)', letterSpacing: 2 }}
        >
          Admin Panel
        </Typography>

        <Stack spacing={1}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? 'primary' : 'gray'}
              onClick={() => handleNavigate(item.path)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </Stack>
      </div>

      <Button variant="outline-danger" onClick={handleLogout}>
        <LogoutIcon />
        Logout
      </Button>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <AppBar elevation={1}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Admin Panel</Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={open} onClose={() => setOpen(false)}>
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return <Box className="sidebar">{sidebarContent}</Box>;
};

export default Sidebar;
