import { useAppDispatch } from 'store/useAppDispatch';
import { useAppSelector } from 'store/useAppSelector';
import {
  selectLoadingStatus,
  selectLocation,
} from 'store/weather/selectors';
import { weatherThunks } from 'store/weather/thunks';
import { Geo } from 'types';

const { updateLocation } = weatherThunks;

export const useLocation = (geo: Geo) => {
  const location = useAppSelector(selectLocation(geo));
  const isUpdating = useAppSelector(selectLoadingStatus);
  const dispatch = useAppDispatch();

  const update = () => {
    dispatch(updateLocation(geo));
  };

  return { location, isUpdating, update };
};
