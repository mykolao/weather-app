import { RootState } from 'store/types';
import { Location } from 'store/weather/types';
import { Geo } from 'types';
import { compareGeos } from 'utils';

export const selectLocation = (geo: Geo) => {
  return (state: RootState) => {
    const {
      weather: { locations },
    } = state;

    const res = locations.find(({ lat, lon }) =>
      compareGeos({ lat, lon }, geo),
    ) as Location;

    return res;
  };
};
