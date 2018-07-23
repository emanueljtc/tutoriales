export default function deviceReducer(state = {}) {
  let isMobile = state.isMobile === 'false' ? false : true;

  return {...state, isMobile}﻿
}
