import styled from 'styled-components';

import Background from '../../assets/bg.webp'
import BackgroundMob from '../../assets/bg-mob.png'

export const StyledWrapper = styled.div`
  height: 100vh;
  background: url(${Background});
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-size: cover;

  @media (max-width: 600px) {
    background: url(${BackgroundMob});
    background-size: 100%;
  }
`;

export const StyledAside = styled.aside`
  background: #F9FAFF;
  position: relative;
  width: 560px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 72px;
  }
`;