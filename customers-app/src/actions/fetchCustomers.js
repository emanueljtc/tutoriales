import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
  {
    "dni": 20355749,
    "name": "Ana Cordova",
    "age": 26
  },
  {
    "dni": 18971787,
    "name": "Emanuel Torres",
    "age": 28
  },
  {
    "dni": 5161055,
    "name": "Joaquin Torres",
    "age": 59
  },
  {
    "dni": 8784453,
    "name": "Ana Clemente.",
    "age": 54
  },
];

export const fetchCustomers = createAction (FETCH_CUSTOMERS, () => customers);