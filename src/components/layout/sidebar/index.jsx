import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_ITEMS = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings', path: '/settings' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
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
              key={item.path}
              variant={location.pathname === item.path ? 'contained' : 'white'}
              onClick={() => handleNavigate(item.path)}
              fullWidth
              sx={{ justifyContent: 'flex-start' }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </div>

      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
