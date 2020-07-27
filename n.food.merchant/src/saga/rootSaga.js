import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { watchAddCategoty, watchAddFood, watchFetchMenu, watchDeleteCategory } from "./menuSaga";

export default function* rootSaga() {

  yield all([
    fork(watchFetchMenu),
    fork(watchAddCategoty),
    fork(watchAddFood)
  ])
}