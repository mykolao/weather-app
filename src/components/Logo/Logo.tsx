import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export const Logo = () => {
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
      {/* Desktop Logo */}
      <Hidden smDown>
        <Typography variant="h4" component="h1">
          weather
        </Typography>
      </Hidden>
      {/* Mobile Logo */}
      <Hidden smUp>
        <Typography variant="h4" component="h1">
          w
        </Typography>
      </Hidden>
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
