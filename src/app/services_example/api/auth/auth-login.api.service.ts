import {LoginParams, LoginResponse} from '../../../types_example';
import {baseApi} from '../base';

export const authLoginApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginParams>({
      query: body => {
          console.log(body)
        return {
          url: '/auth/sign-in',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = authLoginApi;