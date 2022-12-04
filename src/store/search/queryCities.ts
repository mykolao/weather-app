import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi } from 'api';
import { searchActions } from 'store/search/slice';
import { ThunkApi } from 'store/types';
import { removeDuplicateCityData, transformCityData } from 'utils';

const typePrefix = 'Query Cities';

export const queryCities = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  async (query, { dispatch }) => {
    const data = await searchApi.fetchCities(query);

    if (data) {
      // Remove unused field
      const clearedData = transformCityData(data);

      // Clear duplicate results
      const filteredData = removeDuplicateCityData(clearedData);

      dispatch(searchActions.setSearchResults(filteredData));
    }
  },
);
