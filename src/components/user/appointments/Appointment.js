import {
  StyledAvatar, StyledDescription, StyledDoctorPosition,
  StyledFooter,
  StyledHeader,
  StyledInfo,
  StyledName, StyledPatient,
  StyledTime,
} from './Appointment.styled';
import DocAvatar from '../../../assets/DocAvatar.png';
import More from '../../../assets/patient-more.svg';

const Appointment = ({
  item: {
    calendarData,
    time,
    occupation,
    doctorName,
    reason,
    note,
  },
}) => (
  <StyledPatient>
    <StyledHeader>
      <StyledInfo>
        <StyledAvatar><img alt="avatar" src={DocAvatar} /></StyledAvatar>
        <StyledName>
          <p>{doctorName}</p>
          <StyledDoctorPosition>{`${occupation}`}</StyledDoctorPosition>
        </StyledName>
      </StyledInfo>
      <img alt="more" src={More} />
    </StyledHeader>
    <StyledFooter>
      <StyledTime>{`${calendarData} ${time}`}</StyledTime>
      <StyledDescription>{`${reason} ${note}`}</StyledDescription>
    </StyledFooter>
  </StyledPatient>
);

export default Appointment;
