import { createAsyncThunk } from '@reduxjs/toolkit';
import { appActions } from 'store/app/slice';
import { ThunkApi } from 'store/types';
import { weatherThunks } from 'store/weather';

const typePrefix = 'Init App';

const { updateLocations } = weatherThunks;

export const initApp = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { dispatch }) => {
    await dispatch(updateLocations());
    dispatch(appActions.setIsLoading(false));
  },
);
