import photosSlice from "../slices/photosSlice";

export const {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  postPhotoRequest,
  postPhotoSuccess,
  postPhotoFailure,
  getPhotoRequest,
  getPhotoSuccess,
  getPhotoFailure,
  fetchUserPhotosRequest,
  removePhotoRequest,
  removePhotoSuccess,
  removePhotoFailure
} = photosSlice.actions;