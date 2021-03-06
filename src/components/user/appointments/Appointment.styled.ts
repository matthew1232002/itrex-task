import styled from 'styled-components';

import PatientTime from '../../../assets/patient-time.svg';
import Reason from '../../../assets/reasonIcon.svg';

export const StyledPatient = styled.div`
  background: #fff;
  padding: 24px 32px 40px 32px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  height: fit-content;
  word-break: break-word;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

export const StyledInfo = styled.div`
  display: flex;
`;

export const StyledAvatar = styled.div`
  margin-right: 16px;
  img {
    width: 48px;
    height: 48px;
  }
`;

export const StyledName = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledDoctorPosition = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  color: #A1ABC9;
  position: relative;
`;

export const StyledFooter = styled.div`
  font-size: 15px;
`;

export const StyledTime = styled.data`
  font-weight: 600;
  background: url(${PatientTime}) no-repeat;
  background-position-y: center;
  padding: 2px 0 2px 30px;
`;

export const StyledDescription = styled.p`
  margin-top: 16px;
  line-height: 21px;
  background: url(${Reason}) no-repeat;
  background-position-y: top;
  padding-left: 30px;
`;
