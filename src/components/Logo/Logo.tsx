import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export const Logo = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" gap="3px" alignItems="center">
      <Typography
        variant="h4"
        component="span"
        color="#0288d1"
        fontWeight="700"
      >
        {'<'}
      </Typography>
      <Typography variant="h4" component="h1">
        {isXs ? 'w' : 'weather'}
      </Typography>
      <Typography
        variant="h4"
        component="span"
        color="#0288d1"
        fontWeight="700"
      >
        {'/>'}
      </Typography>
    </Box>
  );
};
