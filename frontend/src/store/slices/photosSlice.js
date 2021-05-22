import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  photos: null,
  photosLoading: false,
  photosError: null,
  photo: null,
  getPhotoLoading: false,
  getPhotoError: null,
  postPhotoLoading: false,
  postPhotoError: null,
  removePhotoLoading: false,
  removePhotoError: null
};

const name = 'photos';

const photosSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchPhotosRequest: (state) => {
      state.photosLoading = true;
    },
    fetchPhotosSuccess: (state, {payload: photos}) => {
      state.photosLoading = false;
      state.photos = photos;
    },
    fetchPhotosFailure: (state, {payload: error}) => {
      state.photosLoading = false;
      state.photosError = error;
    },
    postPhotoRequest: (state) => {
      state.postphotoLoading = true;
    },
    postPhotoSuccess: (state) => {
      state.postphotoLoading = false;
    },
    postPhotoFailure: (state, {payload: error}) => {
      state.postphotoLoading = false;
      state.postphotoError = error;
    },
    getPhotoRequest: (state) => {
      state.getphotoLoading = true;
    },
    getPhotoSuccess: (state, {payload: photo}) => {
      state.getphotoLoading = false;
      state.photo = photo;
    },
    getPhotoFailure: (state, {payload: error}) => {
      state.getphotoLoading = false;
      state.getphotoError = error;
    },
    fetchUserPhotosRequest: (state) => {
      state.photosLoading = true;
    },
    removePhotoRequest: (state) => {
      state.removePhotoLoading = true;
    },
    removePhotoSuccess: (state, {payload: photoId}) => {
      state.removePhotoLoading = false;
      state.cocktails = state.cocktails.filter(p => p._id !== photoId);
    },
    removePhotoFailure: (state, {payload: error}) => {
      state.removePhotoLoading = false;
      state.removePhotoError = error;
    }
  }
});

export default photosSlice;