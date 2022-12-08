import { useCallback } from 'react';

import { initApp as initAppThunk } from 'store/app/initApp';
import { selectApp } from 'store/app/selectApp';
import { useAppDispatch } from 'store/useAppDispatch';
import { useAppSelector } from 'store/useAppSelector';

export const useApp = () => {
  const { isLoading } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const initApp = useCallback(() => {
    dispatch(initAppThunk());
  }, [dispatch]);

  return { isLoading, initApp };
};
