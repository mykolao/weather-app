import { FC, memo, SyntheticEvent } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { transformOptions } from 'components/SearchBar/SearchInput/mapOptions';
import { CityInfo } from 'types';

interface Props {
  value: string;
  options: CityInfo[];
  onChange: (value: string) => void;
}

const Component: FC<Props> = (props) => {
  const { value, options, onChange } = props;

  const handleInputChange = (_: SyntheticEvent, value: string) => {
    onChange(value);
  };

  const textOptions = transformOptions(options);

  return (
    <Autocomplete
      fullWidth
      size="small"
      clearOnBlur
      value={value}
      onInputChange={handleInputChange}
      options={textOptions}
      isOptionEqualToValue={() => true}
      noOptionsText="No cities"
      renderInput={(params) => (
        <TextField {...params} label="Find City" />
      )}
    />
  );
};

export const SearchInput = memo(Component);
