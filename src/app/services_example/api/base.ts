import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import {createApi} from '@reduxjs/toolkit/query/react';
import {BASE_URL_API} from '../../config';
import {RootState} from '../../store';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL_API,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;
    const currentToken = headers.get('Authorization')?.slice(6);

    if (token && !currentToken) {
      headers.set('Authorization', token);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['account', 'auth'],
});