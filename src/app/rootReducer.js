import { combineReducers } from 'redux';
// api
// slices
import authReducer, { authSlice } from './redux/auth/authSlice'
import filterReducer, { filterSlide } from './redux/filters/filterSlide';
import apiService from './services/apiService';
// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [filterSlide.reducerPath]: filterReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;
