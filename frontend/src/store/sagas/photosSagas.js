import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {fetchPhotosFailure, fetchPhotosRequest, fetchPhotosSuccess} from "../actions/photosActions";
import {addNotification} from "../actions/notifierActions";

export function* fetchPhotos () {
  try {
    const response = yield axiosApi.get('/photos');
    yield put(fetchPhotosSuccess(response.data));
  } catch (e) {
    yield put(fetchPhotosFailure(e.response.data));
    yield put(addNotification({message: 'Fetch photos failed', options: {variant: 'error'}}));
  }
}

const photosSagas = [
  takeEvery(fetchPhotosRequest, fetchPhotos),
];

export default photosSagas;