import { AddCityButton } from 'components/SearchBar/AddCityButton/AddCityButton';
import { render, screen } from 'test-utils';
import { CityInfo } from 'types';
const defaultCity: CityInfo = {
  lat: 1,
  lon: 1,
  name: 'name',
  country: 'country',
};

const cities: CityInfo[] = [defaultCity];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const clickHandler = () => {};

describe('<AddCityButton/>', () => {
  it('Should have enabled button if input query is valid', () => {
    render(
      <AddCityButton
        searchResults={cities}
        searchQuery={`${defaultCity.name}, ${defaultCity.country}`}
        onCLick={clickHandler}
      />,
    );

    const addButton = screen.queryByRole('button');

    expect(addButton).toBeEnabled();
  });

  it('Should initially have disabled button', () => {
    render(
      <AddCityButton
        searchResults={cities}
        searchQuery=""
        onCLick={clickHandler}
      />,
    );

    const addButton = screen.queryByRole('button');

    expect(addButton).toBeDisabled();
  });
});
