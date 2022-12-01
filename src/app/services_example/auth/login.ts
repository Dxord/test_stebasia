import { BASE_URL_API } from '../../config';
import {LoginParams, LoginResponse} from '../../types_example';
import {baseApi} from '../base';

export const authLoginApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginParams>({
      query: ({email, password}) => {
        console.log(email, password)
        const body = {email, password}

        return {
          url: BASE_URL_API+'/v1/auth/sign-in',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = authLoginApi;
