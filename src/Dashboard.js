import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import ClippedDrawer from './Drawer';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ClippedDrawer/>
        </Box>
    </Box>
  );
}

export default Dashboard;
