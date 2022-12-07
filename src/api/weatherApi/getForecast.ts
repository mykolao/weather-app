import { apiInstance } from 'api/weatherApi/config';
import { transformForecastResponse } from 'api/weatherApi/utils';
import { Geo } from 'types';

export const getForecast = async (geo: Geo) => {
  const endpoint = 'forecast';
  const config = { params: { ...geo } };

  const { data } = await apiInstance.get(endpoint, config);

  const transformedData = transformForecastResponse(data);

  return transformedData;
};
