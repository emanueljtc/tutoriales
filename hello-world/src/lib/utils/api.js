// Dependencies
import queryString from 'query-string';

// Configuration
import config from '../../config';

export function apiFetch(endpoint, options = {}, query = false) {
  let qs;

  if(query){
    qs = queryString.stringify(query)
  }

  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options);
      const fetchEndPoint = apiEndPoint(endpoint, qs);
      const response = await fetch(fetchEndPoint, fetchOptions);

      return response.json();
    } catch (e) {
      throw e;
    }
  };

  return getPromise();
}

export function apiEndPoint(endpoint, qs){
  let query = '';

  if (qs) {
    query = `?${qs}`;
  }

  return `${config.api.url}${endpoint}${query}`;
}

export function apiOptions(options = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = false
  } = options;

  const newOptions = {
    method,
    headers,
    credentials: 'include'
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}
