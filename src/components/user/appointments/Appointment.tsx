import moment from 'moment';
import {
  StyledAvatar, StyledDescription, StyledDoctorPosition,
  StyledFooter,
  StyledHeader,
  StyledInfo,
  StyledName, StyledPatient,
  StyledTime,
} from './Appointment.styled';
import More from '../../../assets/patient-more.svg';
import { AppointmentType } from '../../models/appointment.model';

const Appointment = ({
  visitDate,
  reason,
  note,
  doctor,
  id,
}: AppointmentType) => (
  <StyledPatient data-testid={id}>
    <StyledHeader>
      <StyledInfo>
        <StyledAvatar><img alt="avatar" src={doctor.photo} /></StyledAvatar>
        <StyledName>
          <p>
            {doctor.first_name}
            {' '}
            {doctor.last_name}
          </p>
          <StyledDoctorPosition>{doctor.specialization_name}</StyledDoctorPosition>
        </StyledName>
      </StyledInfo>
      <img alt="more" src={More} />
    </StyledHeader>
    <StyledFooter>
      <StyledTime>{moment(visitDate).format('ddd MMM D, YYYY h:mm a')}</StyledTime>
      <StyledDescription>{`${reason} ${note}`}</StyledDescription>
    </StyledFooter>
  </StyledPatient>
);

export default Appointment;
