// utilidad para manejar los reducers
import {handleActions} from 'redux';
import { FETCH_CUSTOMERS } from '../constants/index';

const customers = handleActions({
  [FETCH_CUSTOMERS]: state => state
}, {});