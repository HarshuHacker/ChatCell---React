import { Tuple, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import reducer from '../Reducers';
import logger from 'redux-logger';

export default function configStore() {
  const store = configureStore({
    reducer,
    middleware: () => new Tuple(logger, thunk),
  });
  return store;
}
