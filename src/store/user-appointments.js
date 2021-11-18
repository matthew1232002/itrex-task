import { createSlice } from '@reduxjs/toolkit';

const userAppointments = createSlice({
  name: 'userAppointments',
  initialState: {
    items: [],
  },
  reducers: {
    addAppointment(state, action) {
      const newAppointment = action.payload;
      state.items.push({
        id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1,
        calendarData: newAppointment.calendarData,
        time: newAppointment.time,
        occupation: newAppointment.occupation,
        doctorName: newAppointment.doctorName,
        reason: newAppointment.reason,
        note: newAppointment.note,
      });
    },
  },
});

export const appointmentItems = (state) => state.userAppointments.items;

export const appointmentsActions = userAppointments.actions;

export default userAppointments;
