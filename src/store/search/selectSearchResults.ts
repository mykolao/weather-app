import { RootState } from 'store/types';

export const selectSearchResults = (state: RootState) =>
  state.search.searchResults;
