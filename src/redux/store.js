// import { combineReducers } from "redux";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage'

import contactReducer from './reducer';

// LocalStorage
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
   logger,
];
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }

const store = configureStore({
    reducer: {
        contacts:contactReducer
    },
     middleware,
  devTools: process.env.NODE_ENV === 'development',
});


// const persistor = persistStore(store);

export default store;

// const rootReducer = combineReducers({
//     contacts: contactReducer,
// });