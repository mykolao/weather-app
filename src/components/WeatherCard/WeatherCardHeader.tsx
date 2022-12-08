import { ReactNode } from 'react';

import CardHeader from '@mui/material/CardHeader';
import { CityInfo } from 'types';

interface Props extends Pick<CityInfo, 'name' | 'country'> {
  children: ReactNode;
}

export const WeatherCardHeader = (props: Props) => {
  const { name, country, children } = props;

  return (
    <CardHeader
      title={name}
      titleTypographyProps={{ color: 'primary', variant: 'h4' }}
      subheader={country}
      action={children}
    />
  );
};
