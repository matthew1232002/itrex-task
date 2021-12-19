import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledBtn = styled(NavLink)`
  background: #FFFFFF;
  color: #7297FF;
  outline: none;
  border: none;
  border-radius: 8px;

  margin: 0 12px 0 0;
  padding: 12px 30px;
  text-decoration: none;

  @media (max-width: 600px) {
    width: 120px;
  }
`;

export const StyledControllers = styled.div`
  margin-bottom: 56px;
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`;
