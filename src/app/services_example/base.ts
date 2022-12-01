import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi} from '@reduxjs/toolkit/query/react';
import {BASE_URL_API} from '../config';
import {RootState, store} from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL_API,
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  appendToken: if (typeof args !== 'string') {
    // TODO Fix dependency required cycle on RootState
    const token = (store.getState() as RootState).auth.token;

    if (!token) {
      break appendToken;
    }

    if (!(args.body instanceof FormData)) {
      break appendToken;
    }

    args.body.append('token', token);
  }

  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
  tagTypes: ['account', 'auth'],
});
