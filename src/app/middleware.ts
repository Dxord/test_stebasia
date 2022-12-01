import {baseApi} from './services_example';

export const userMiddlewares = [baseApi.middleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  userMiddlewares.push(createDebugger());
}
