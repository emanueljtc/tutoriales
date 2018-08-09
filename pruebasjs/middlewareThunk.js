const actionNormal = payload => ({type: 'miAction', payload});

const actionDelay = payload => {
  return dispatch => {
    dispatch(`Inicio: ${payload}`);
    window.setTimeout(() => dispatch(`Termino: ${payload}`), 1000);
  }
}

const miDispatch = texto => {
  console.log(texto);

}
// mientras tanto en el Middleware...
// return ({dispatch, getState }) => next => action => {}

const payload = "fetching";
const action = actionNormal(payload);
if (typeof action === 'function') {
  console.log("Action delay");
  action(myDispatch);
}else {
  console.log("action normal");
  console.log(action);
}
