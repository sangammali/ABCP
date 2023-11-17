import { combineReducers } from 'redux';

import { toastReducers } from './slices/toastSlice';
import { todoApiAction, todoApiReducer } from './apiSlices/todoSlice';

const rootReducers = combineReducers({
  toast: toastReducers,

  [todoApiAction.reducerPath]: todoApiReducer,
});

export default rootReducers;
