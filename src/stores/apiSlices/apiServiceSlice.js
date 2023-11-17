import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { appConstants } from 'helpers/constants/appConstant';
import { localStore } from '../localStore';
import { toastActions } from '../slices/toastSlice';

const apiServiceSlice = {};

apiServiceSlice.baseQuery = fetchBaseQuery({
  baseUrl: appConstants.apiBaseURL,
  prepareHeaders: (headers) => {
    const token = localStore.getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

apiServiceSlice.baseQueryWithRetry = retry(
  apiServiceSlice.baseQueryWithInterceptor,
  { maxRetries: 3 }
);

apiServiceSlice.baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await apiServiceSlice.baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 401) {
      // api.dispatch(authActions.logout());
    }

    api.dispatch(
      toastActions.setToastData({
        message: result.error.data.message,
        variant: 'error',
      })
    );
  }

  return result;
};

export { apiServiceSlice };
