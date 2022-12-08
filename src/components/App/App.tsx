import { useEffect } from 'react';

import AppContainer from 'components/App/AppContainer';
import { AppLoader } from 'components/App/AppLoader';
import CityList from 'components/CityList';
import Header from 'components/Header';
import { useApp } from 'store/app';

export const App = () => {
  const { isLoading, initApp } = useApp();

  useEffect(() => {
    initApp();
  }, [initApp]);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <>
      <Header />
      <AppContainer>
        <CityList />
      </AppContainer>
    </>
  );
};
