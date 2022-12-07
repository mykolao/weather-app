import { FC, memo, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { useLocations } from 'store/weather';
import { CityInfo } from 'types';
import { compareCities, getCityByQuery } from 'utils';

interface Props {
  searchQuery: string;
  searchResults: CityInfo[];
  onCLick: () => void;
}

const Component: FC<Props> = (props) => {
  const { searchQuery, searchResults, onCLick } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(
    null,
  );

  const { addCity } = useLocations();

  // Button activation and city selection logic
  useEffect(() => {
    // Get city data by query
    const city = getCityByQuery(searchResults, searchQuery);

    // Do nothing if already enabled
    if (city && selectedCity && compareCities(city, selectedCity))
      return;

    if (city) {
      // Set new selected city
      setSelectedCity(city);

      // Enable button if not
      if (isDisabled) setIsDisabled(false);
      return;
    }

    // Disable button if not
    if (!isDisabled) setIsDisabled(true);
  }, [
    searchResults,
    searchQuery,
    isDisabled,
    setIsDisabled,
    selectedCity,
  ]);

  const handleClick = () => {
    if (selectedCity) addCity(selectedCity);

    onCLick();
  };

  return (
    <Button
      variant="contained"
      disabled={isDisabled}
      onClick={handleClick}
    >
      Add
    </Button>
  );
};

export const AddCityButton = memo(Component);
