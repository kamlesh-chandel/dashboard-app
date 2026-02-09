import { Box, Typography, Stack } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/common/button';
import { ROUTES, NAV_ITEMS } from '@/utils/routes';

import './index.css';
import '@/styles/theme.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate(ROUTES.LOGIN);
  };

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
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
              variant={location.pathname === item.path ? 'primary' : 'gray'}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </div>

      <Button variant={"outline-danger"} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
