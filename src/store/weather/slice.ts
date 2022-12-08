import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'store/types';
import { initialState } from 'store/weather/initialState';
import { setLocalState } from 'store/weather/localState';
import { Location } from 'store/weather/types';
import { compareGeos, compareLocations } from 'utils';

const name = 'Weather';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setLoadingStatus: (state, { payload }: Action<boolean>) => {
      state.isLoading = payload;
    },

    setLocations: (state, { payload }: Action<Location[]>) => {
      state.locations = payload;
      setLocalState(state.locations);
    },

    addLocation: (state, { payload }: Action<Location>) => {
      const isDuplicate = !!state.locations.find((location) =>
        compareLocations(location, payload),
      );

      if (!isDuplicate) {
        state.locations.push(payload);
        setLocalState(state.locations);
      }
    },

    updateLocation: (state, { payload }: Action<Location>) => {
      for (let i = 0; i < state.locations.length; i++) {
        const { lat, lon } = state.locations[i];

        const currentGeo = { lat, lon };
        const updateGeo = { lat: payload.lat, lon: payload.lon };

        if (compareGeos(currentGeo, updateGeo)) {
          state.locations[i] = payload;
        }
      }

      setLocalState(state.locations);
    },

    removeLocation: (state, { payload }: Action<Location>) => {
      const { lat, lon } = payload;
      state.locations = state.locations.filter(
        (location) => location.lat !== lat && location.lon !== lon,
      );
      setLocalState(state.locations);
    },
  },
});

export const { reducer: weatherReducer, actions: weatherActions } =
  slice;
