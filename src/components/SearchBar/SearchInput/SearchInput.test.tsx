import { transformOptions } from 'components/SearchBar/SearchInput/mapOptions';
import { SearchInput } from 'components/SearchBar/SearchInput/SearchInput';
import { fireEvent, render, screen } from 'test-utils';
import { CityInfo } from 'types';

const searchOptions: CityInfo[] = [
  {
    lat: 1,
    lon: 1,
    name: 'first',
    country: 'country',
  },
  {
    lat: 1,
    lon: 1,
    name: 'second',
    country: 'country2',
  },
];

describe('<SearchInput/>', () => {
  it('Should select autocomplete option', () => {
    const handleChange = jest.fn();

    render(
      <SearchInput
        value=""
        options={searchOptions}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Find City');

    fireEvent.change(input, { target: { value: 'first' } });

    const firstOption = transformOptions(searchOptions)[0];
    const autocompleteOption = screen.getByText(firstOption);

    fireEvent.click(autocompleteOption);

    expect(handleChange).toBeCalledWith(firstOption);
  });

  it('Should callback with input value', () => {
    const handleChange = jest.fn();

    render(
      <SearchInput
        value=""
        options={searchOptions}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Find City');

    fireEvent.change(input, { target: { value: 'value' } });

    expect(handleChange).toBeCalledWith('value');
  });
});
