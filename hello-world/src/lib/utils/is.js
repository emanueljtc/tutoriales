export function isArray(variable){
  return variable instanceof Array;
}

export function isDefined(variable){
  return typeof variable !== 'undefined' && variable !== null;
}

export function isFunction(variable) {
  return typeof varible === 'function';
}

export function isObject(variable) {
  return isDefined(variable) && typeof variable === 'object'
}
