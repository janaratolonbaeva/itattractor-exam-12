import {combineReducers} from "redux";
import usersSlice from "./slices/usersSlice";
import notifierSlice from "./slices/notifierSlice";
import photosSlice from "./slices/photosSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  notifier: notifierSlice.reducer,
  photos: photosSlice.reducer
});

export default rootReducer;