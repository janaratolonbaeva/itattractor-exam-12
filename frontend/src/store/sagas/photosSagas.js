import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  fetchPhotosFailure,
  fetchPhotosRequest,
  fetchPhotosSuccess, fetchUserPhotosRequest, getPhotoFailure, getPhotoRequest, getPhotoSuccess, postPhotoFailure,
  postPhotoRequest,
  postPhotoSuccess, removePhotoFailure, removePhotoRequest, removePhotoSuccess
} from "../actions/photosActions";
import {addNotification} from "../actions/notifierActions";
import {historyPush} from "../actions/historyActions";

export function* fetchPhotos () {
  try {
    const response = yield axiosApi.get('/photos/all');
    yield put(fetchPhotosSuccess(response.data));
  } catch (e) {
    yield put(fetchPhotosFailure(e.response.data));
    yield put(addNotification({message: 'Fetch photos failed', options: {variant: 'error'}}));
  }
}

export function* fetchUserPhotos ({payload: id}) {
  try {
    const response = yield axiosApi.get('/photos/users/' + id);
    yield put(fetchPhotosSuccess(response.data));
  } catch (e) {
    yield put(fetchPhotosFailure(e.response.data));
    yield put(addNotification({message: 'Fetch photos failed', options: {variant: 'error'}}));
  }
}

export function* postPhoto({payload: photo}) {
  try {
    yield axiosApi.post('/photos', photo);
    yield put(postPhotoSuccess());
    yield put(historyPush('/'));
    yield put(addNotification({message: 'Photo created successfully', options: {variant: 'success'}}));
  } catch (e) {
    yield put(postPhotoFailure(e.response.data));
    yield put(addNotification({message: 'Create photo failed', options: {variant: 'error'}}));
  }
}

export function* removePhoto ({payload: photoId}) {
  try {
    yield axiosApi.delete('/photos/' + photoId);
    yield put(removePhotoSuccess(photoId));
    yield put(addNotification({message: 'Photo deleted successfully', options: {variant: 'success'}}));
  } catch (e) {
    yield put(removePhotoFailure(e.response.data));
    yield put(addNotification({message: 'Delete photo failed', options: {variant: 'error'}}));
  }
}

export function* getPhoto ({payload: photoId}) {
  try {
    const response = yield axiosApi.get('photos/' + photoId);
    yield put(getPhotoSuccess(response.data));
  } catch (e) {
    yield put(getPhotoFailure(e));
    yield put(addNotification({message: 'Fetch photo failed', options: {variant: 'error'}}));
  }
}

const photosSagas = [
  takeEvery(fetchPhotosRequest, fetchPhotos),
  takeEvery(fetchUserPhotosRequest, fetchUserPhotos),
  takeEvery(postPhotoRequest, postPhoto),
  takeEvery(removePhotoRequest, removePhoto),
  takeEvery(getPhotoRequest, getPhoto)
];

export default photosSagas;