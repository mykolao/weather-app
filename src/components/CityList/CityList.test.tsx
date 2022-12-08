import { useEffect } from 'react';

import { CityList } from 'components/CityList/CityList';
import { useAppDispatch } from 'store/useAppDispatch';
import { weatherActions } from 'store/weather/slice';
import { render, screen, testLocation } from 'test-utils';

const ListWithLocation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(weatherActions.addLocation(testLocation));
  }, [dispatch]);

  return <CityList />;
};

const EmptyList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(weatherActions.removeLocation(testLocation));
  }, [dispatch]);

  return <CityList />;
};

describe('<CityList/>', () => {
  it('Should render one card', () => {
    render(<ListWithLocation />);

    const message = screen.queryByText('country');
    expect(message).not.toBeNull();
  });

  it('Should render "No Selected Cities" message', () => {
    render(<EmptyList />);

    const message = screen.queryByText('No Selected Cities');
    expect(message).not.toBeNull();
  });
});
