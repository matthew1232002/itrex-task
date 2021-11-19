import styled from 'styled-components';

import PatientTime from '../../assets/patient-time.svg';
import PatientDescription from '../../assets/patient-description.svg';

export const StyledPatient = styled.div`
  background: #fff;
  padding: 24px 32px 40px 32px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  height: fit-content;
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
`;

export const StyledName = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledStatus = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  color: #A1ABC9;
  position: relative;
  padding-left: 15px;
  &:before{
    content: "";
    display: block;
    background: #34C197;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 999;
    transform: translateY(-50%);
  }
`;

export const StyledFooter = styled.div`
  font-size: 15px;
`;

export const StyledTime = styled.p`
  font-weight: 600;
  line-height: 19px;
  margin-bottom: 16px;
  background: url(${PatientTime}) no-repeat;
  background-position-y: center;
  padding-left: 30px;
`;

export const StyledDescription = styled.p`
  line-height: 21px;
  background: url(${PatientDescription}) no-repeat;
  background-position-y: top;
  padding-left: 30px;
`;
