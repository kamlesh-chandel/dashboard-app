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

import { Button } from '@/components/common/button';
import { ROUTES, NAV_ITEMS } from '@/utils/routes';

import './index.css';
import '@/styles/theme.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState<boolean>(false);

  const handleNavigate = (path: string):void => {
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
        bgcolor: 'background.paper',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Typography variant="h5" fontWeight={700} mb={3} ml={1}>
          Admin Panel
        </Typography>

        <Stack spacing={1}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? 'primary' : 'gray'}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </div>

      <Button variant="outline-danger" onClick={handleLogout}>
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

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      {sidebarContent}
    </Box>
  );
};

export default Sidebar;
