import { useCallback, useDeferredValue } from 'react';

import Box from '@mui/material/Box';
import AddCityButton from 'components/SearchBar/AddCityButton';
import SearchInput from 'components/SearchBar/SearchInput';
import { useSearch } from 'store/search';

export const SearchBar = () => {
  const { query, setQuery, searchResults } = useSearch();
  const deferredQuery = useDeferredValue(query);

  const clearQuery = useCallback(() => setQuery(''), [setQuery]);

  return (
    <Box width="256px" display="flex" gap="12px">
      <SearchInput
        value={deferredQuery}
        options={searchResults}
        onChange={setQuery}
      />
      <AddCityButton
        searchQuery={query}
        searchResults={searchResults}
        onCLick={clearQuery}
      />
    </Box>
  );
};
