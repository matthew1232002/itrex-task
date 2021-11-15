import React from 'react';
import UserLayout from '../components/layout/UserLayout';
import UserAppointments from '../components/user/appointments/UserAppointments';

const UserAppointmentsPage = () => (
  <UserLayout>
    <UserAppointments />
  </UserLayout>
);

export default UserAppointmentsPage;
