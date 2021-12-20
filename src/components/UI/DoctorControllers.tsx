import routes from '../../routes/routes';
import { StyledControllers } from './Controllers.styled';
import Button from './Button';

const DoctorControllers = () => (
  <StyledControllers>
    <Button text="Patients" padding="12px 49px" to={routes.doctorPatientsPage} itemPath={routes.doctorPatientsPage} margin="0 12px 0 0" />
    <Button text="Resolutions" padding="12px 38px" to="/" itemPath="/" margin="0 12px 0 0" />
  </StyledControllers>
);

export default DoctorControllers;
