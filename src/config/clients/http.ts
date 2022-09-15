/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUtils } from 'react-admin';

const httpClient = (url: any, options: Record<string, any> = {}) => {
  if (!options['headers']) {
    options['headers'] = new Headers({ Accept: 'application/json' });
  }
  // options['headers'].set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
};

export default httpClient;
