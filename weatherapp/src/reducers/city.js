import { SET_CITY } from './../actions';
export const city = (state = {}, action) => { // Reducer
  switch (action.type) {
    case SET_CITY:
      return action.payload; //Spread Operators ES&
    default:
        return state;
  }
}
