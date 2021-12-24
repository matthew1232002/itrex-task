import routes from '../../routes/routes';
import { StyledControllers } from './Controllers.styled';
import Button from './Button';

const UserControllers = () => (
  <StyledControllers>
    <Button text="Profile" padding="12px 57px" to="/" itemPath="/" margin="0 12px 12px 0" />
    <Button text="Appointments" padding="12px 26px" to={routes.userAppointmentsPage} itemPath={routes.userAppointmentsPage} margin="0 12px 12px 0" />
    <Button text="Resolutions" padding="12px 38px" to={routes.userResolutions} itemPath={routes.userResolutions} margin="0 12px 12px 0" />
  </StyledControllers>
);

export default UserControllers;
