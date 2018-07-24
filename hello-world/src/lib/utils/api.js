// Dependencies
import queryString from 'query-string';

// Configuration
import config from '../../config';

export function apiEndPoint(endpoint, qs){
  let query = '';

  if (qs) {
    query = `?${qs}`;
  }

  return `${config.api.url}${endpoint}${query}`;
}
