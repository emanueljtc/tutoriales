import { FETCH_CUSTOMERS } from './../constants';
import { CreateAction } from 'redux-actions';

export const fetchCustomers = createAction (FETCH_CUSTOMERS);