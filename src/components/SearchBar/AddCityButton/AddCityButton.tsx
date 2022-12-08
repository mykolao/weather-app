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
    const city = getCityByQuery(searchResults, searchQuery);

    if (city && selectedCity && compareCities(city, selectedCity))
      return; // Do nothing if already enabled

    if (city) {
      setSelectedCity(city); // Select new city
      if (isDisabled) setIsDisabled(false); // Enable button if not
      return;
    }

    if (!isDisabled) setIsDisabled(true); // Disable button if not
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
