import { configureStore } from '@reduxjs/toolkit';

import userAppointments from './user-appointments';

const store = configureStore({
  reducer: { userAppointments: userAppointments.reducer },
});

export default store;
