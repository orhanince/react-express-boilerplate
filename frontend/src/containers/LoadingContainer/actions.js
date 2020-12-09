import * as types from "./constants";

export function GetUsers(successFunc = () => {}, errorFunc = () => {}) {
  return {
    type: types.GET_USERS,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}
