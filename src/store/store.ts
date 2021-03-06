import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import patientReducer from './user/patientReducer';
import authReducer from './auth/authReducer';
import doctorReducer from './doctor/doctorReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [],
};

const store = configureStore({
  reducer: {
    auth: persistReducer<any>(authPersistConfig, authReducer),
    patient: patientReducer,
    doctor: doctorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
