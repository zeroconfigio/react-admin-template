import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

import httpClient from '@app/config/clients/http';

const throwException = (err: Error) => {
  throw err;
};

const apiEndpoint = process.env.REACT_APP_API_URL ?? throwException(new Error('REACT_APP_API_URL is not set'));

const createApiInterface = process.env.NODE_ENV === 'development' ? jsonServerProvider : simpleRestProvider;

const dataProvider = createApiInterface(apiEndpoint, httpClient);

export default dataProvider;
