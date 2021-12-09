import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 600px) {
    padding: 20px 24px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;

  div {
    padding-right: 4px;
  }

  span {
    font-weight: 600;
    padding: 4px 0 0 0;
`;

export const StyledUser = styled.div`
  display: flex;
`;

export const StyledUserData = styled.div`
  padding: 0 16px 0 0;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledUserProfession = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  color: #A1ABC9;
`;

export const StyledUserImg = styled.div`
  position: relative;
  width: 40px;

  &:before {
    content: "";
    display: block;
    background: #34C197;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  &:after {
    content: '';
    border-right: 11px solid #E4EBFF;
    border-bottom: 11px solid #E4EBFF;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
  }
`;
