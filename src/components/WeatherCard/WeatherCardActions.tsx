import { memo, useState } from 'react';

import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import WeatherDetails from 'components/WeatherDetails';
import { customStyles } from 'mui/customStyles';
import { Geo } from 'types';

interface Props {
  geo: Geo;
}

const styles = customStyles({
  justifyContent: 'center',
});

export const WeatherCardActions = memo(({ geo }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => setIsModalVisible(true);
  const handleHideModal = () => setIsModalVisible(false);

  return (
    <CardActions sx={styles}>
      {isModalVisible && (
        <WeatherDetails
          geo={geo}
          open={isModalVisible}
          onClose={handleHideModal}
        />
      )}
      <Button
        color="primary"
        size="large"
        sx={{ padding: 1 }}
        onClick={handleShowModal}
      >
        View Forecast
      </Button>
    </CardActions>
  );
});
