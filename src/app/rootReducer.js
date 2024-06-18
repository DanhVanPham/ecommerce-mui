import { combineReducers } from 'redux';
// api
// slices
import authReducer, { authSlice } from './redux/auth/authSlice'
import apiService from './services/apiService';
// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;
