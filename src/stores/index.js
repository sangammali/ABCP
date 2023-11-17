import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducers from './rootReducer';
import { todoApiAction } from './apiSlices/todoSlice';

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(todoApiAction.middleware),
});

export const persistor = persistStore(store);
