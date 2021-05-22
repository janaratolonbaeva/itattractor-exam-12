import {all} from 'redux-saga/effects';
import history from "../history";
import historySagas from "./sagas/historySagas";
import usersSagas from "./sagas/usersSagas";
import photosSagas from "./sagas/photosSagas";

export default function* rootSaga() {
  yield all([
    ...historySagas(history),
    ...usersSagas,
    ...photosSagas
  ])
}