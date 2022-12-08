import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForecastItem } from 'components/ForecastChart/useForecastItem';
import { useRGBTemperature } from 'components/ForecastChart/useRGBTemperature';
import { customStyles } from 'mui/customStyles';
import { ForecastData } from 'types';
import { formatTemperature } from 'utils';

interface Props {
  value: ForecastData;
  baseValue: number;
  range: number;
  scale: number;
}

const wrapperStyles = customStyles((theme) => ({
  bgcolor: theme.palette.action.disabledBackground,
  borderRadius: 1.5,
  width: '100%',
  display: 'flex',
  alignItems: 'end',
  mb: 1,
}));

const boxStyles = customStyles({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '3px 6px',
  borderRadius: 'inherit',
});

export const ForecastItem = ({
  scale,
  value,
  baseValue,
  range,
}: Props) => {
  const itemHeight = 30;

  const itemColor = useRGBTemperature(value.temp);
  const itemValue = formatTemperature(value.temp);

  const { wrapperHeight, itemOffset } = useForecastItem(
    value,
    baseValue,
    itemHeight,
    range,
    scale,
  );

  return (
    <Grid item lg={1} sm={2} xs={3}>
      <Box height={`${wrapperHeight}px`} sx={wrapperStyles}>
        <Box
          sx={{ ...boxStyles, backgroundColor: itemColor }}
          height={itemHeight}
          marginBottom={`${itemOffset}px`}
        >
          <Typography variant="body1" sx={{ cursor: 'pointer' }}>
            {itemValue}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
