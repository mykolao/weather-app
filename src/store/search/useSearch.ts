import { useEffect, useState } from 'react';

import { queryCities } from 'store/search/queryCities';
import { selectSearchResults } from 'store/search/selectSearchResults';
import { useAppDispatch } from 'store/useAppDispatch';
import { useAppSelector } from 'store/useAppSelector';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const searchResults = useAppSelector(selectSearchResults);

  const dispatch = useAppDispatch();

  // Search request effect
  useEffect(() => {
    dispatch(queryCities(query));
  }, [query, dispatch]);

  return { query, setQuery, searchResults };
};
