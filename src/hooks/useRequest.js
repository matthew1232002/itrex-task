import { appointmentsActions } from '../store/user-appointments';

function UseRequest(dispatch, calendarData, time, occupation, doctorName, reason, note) {
  dispatch(appointmentsActions.addAppointment({
    calendarData,
    time,
    occupation,
    doctorName,
    reason,
    note,
  }));
}

export default UseRequest;
