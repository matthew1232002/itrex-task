import styled from 'styled-components';

import PatientTime from '../../../assets/patient-time.svg';
import PatientDescription from '../../../assets/patient-description.svg';

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
  position: relative;
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

export const StyledStatus = styled.p<{ status: string }>`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  color: #A1ABC9;
  position: relative;
  padding-left: 15px;
  &:before{
    content: "";
    display: block;
    background: ${(props) => (props.status === 'waiting' ? '#7297FF' : null)};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

export const StyledMore = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 6px;
  &:focus,
  &:active{
    background: #F9FAFF;
  }
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    &:focus,
    &:active{
      filter: invert(51%) sepia(63%) saturate(942%) hue-rotate(200deg) brightness(101%) contrast(102%);
    }
  }
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
  line-height: 22px;
  background: url(${PatientDescription}) no-repeat;
  background-position-y: top;
  padding-left: 30px;
`;
