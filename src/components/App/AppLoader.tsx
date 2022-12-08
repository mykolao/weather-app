import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppContainer from 'components/App/AppContainer';
import Logo from 'components/Logo';
import { customStyles } from 'mui/customStyles';

const loaderStyles = customStyles({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 1,
  transform: 'scale(2)',
});

export const AppLoader = () => {
  return (
    <AppContainer>
      <Box sx={loaderStyles}>
        <Logo />
        <Typography variant="h5" component={'p'} color="primary">
          Loading
        </Typography>
      </Box>
    </AppContainer>
  );
};
