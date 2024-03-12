import { Box } from '@mui/material';
import { MessageNotifications } from '../pages/MessageBoard';
import { Attendance } from './Attendance';
import Router from './Router';
import BottomBar from './BottomBar';

const Main = () => {
  return (
    <Box
      sx={{
        mt: { xs: '47px', md: '47px' },
        overflowY: 'auto',
        height: { xs: 'calc(100% - 47px)', md: 'calc(100% - 47px)' },
        backgroundColor: 'primary.main',
      }}
      component="main"
      id="main"
    >
      <Router />
      <MessageNotifications />
      <Attendance />
      <BottomBar />
    </Box>
  );
};

export default Main;
