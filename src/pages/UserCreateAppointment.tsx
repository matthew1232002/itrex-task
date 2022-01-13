/* eslint-disable */
import UserLayout from '../components/layout/User/UserLayout';
import CreateAppointment from '../components/user/createAppointment/CreateAppointment';
import CreateAppointmentFormik from '../components/user/createAppointment/CreateAppointmentFormik';

const UserCreateAppointment = () => (
  <UserLayout>
    {/*<CreateAppointment />*/}
    <CreateAppointmentFormik />
  </UserLayout>
);

export default UserCreateAppointment;
