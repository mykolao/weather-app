import { apiInstance } from 'api/weatherApi/config';
import { WeatherResponse } from 'api/weatherApi/types';
import { transformWeatherResponse } from 'api/weatherApi/utils';
import { Geo } from 'types';

export const getWeather = async (geo: Geo) => {
  const endpoint = 'weather';

  const config = { params: { ...geo } };

  const { data } = await apiInstance.get<WeatherResponse>(
    endpoint,
    config,
  );

  const transformedData = transformWeatherResponse(data);

  return transformedData;
};
