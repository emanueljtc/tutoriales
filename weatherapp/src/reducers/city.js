import { SET_CITY } from './../actions';
export const city = (state, action) => { // Reducer
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.value}
    default:

  }
  return state;
}
