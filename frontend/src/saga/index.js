import { call, all } from "redux-saga/effects";

import appLoadSaga from "./../containers/LoadingContainer/saga";

const rootSaga = function* rootSaga() {
  yield all([call(appLoadSaga)]);
};

export default rootSaga;
