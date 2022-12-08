import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { DetailsContent } from 'components/WeatherDetails/DetailsContent';
import { DetailsForecast } from 'components/WeatherDetails/DetailsForecast';
import { DetailsHeader } from 'components/WeatherDetails/DetailsHeader';
import { customStyles } from 'mui/customStyles';
import { useLocation } from 'store/weather/hooks';
import { Geo } from 'types';

const boxStyles = customStyles({
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
});

const cardStyles = customStyles({
  padding: 1,
});

interface Props {
  open: boolean;
  onClose: () => void;
  geo: Geo;
}

export const WeatherDetails = ({ geo, open, onClose }: Props) => {
  const { location, update, isUpdating } = useLocation(geo);
  const { currentWeather, name, country, forecast } = location;
  const { icon, description } = currentWeather;

  const headerProps = {
    name,
    country,
    icon,
    description,
    onUpdate: update,
    isLoading: isUpdating,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyles}>
        <Card sx={cardStyles} elevation={2}>
          <DetailsHeader {...headerProps} />
          <Divider />
          <DetailsForecast forecast={forecast} />
          <DetailsContent value={currentWeather} />
        </Card>
      </Box>
    </Modal>
  );
};
