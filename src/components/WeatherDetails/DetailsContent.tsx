import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { customStyles } from 'mui/customStyles';
import { theme } from 'mui/theme';
import { WeatherData } from 'types';
import { formatTemperature } from 'utils';

const itemStyles = customStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Item = (props: {
  title: string;
  value: string;
  deg: boolean;
}) => {
  const { title, value, deg } = props;

  return (
    <Grid item sx={itemStyles} lg={3} md={6} sm={6}>
      <Typography
        variant="h6"
        component="h3"
        color={theme.palette.grey.A400}
      >
        {title}
      </Typography>
      {deg ? (
        <Typography variant="h4" component="p">
          {value}&deg;
        </Typography>
      ) : (
        <Typography variant="h4" component="p">
          {value}
        </Typography>
      )}
    </Grid>
  );
};

const gridStyles = customStyles({
  justifyContent: 'space-evenly',
});

export const DetailsContent = (props: { value: WeatherData }) => {
  const {
    value: { temp, feels_like, humidity, pressure },
  } = props;

  const renderData: [string, string, boolean][] = [
    ['Temperature', `${formatTemperature(temp)}`, true],
    ['Feels Like', `${formatTemperature(feels_like)}`, true],
    ['Humidity', `${humidity}%`, false],
    ['Pressure', `${pressure}`, false],
  ];

  return (
    <CardContent>
      <Grid container spacing={3} sx={gridStyles}>
        {renderData.map(([title, value, deg]) => (
          <Item key={title} title={title} value={value} deg={deg} />
        ))}
      </Grid>
    </CardContent>
  );
};
