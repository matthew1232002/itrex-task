import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 0 32px 0 0;
`;

export const StyledCrumbs = styled.div`
  margin: 0 0 72px 0;
`;

export const StyledSubtitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin: 0 0 40px 0;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const StyledContainer = styled.div<{ width: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : '')};
`;

export const StyledButton = styled.button`
  float: right;
  border: none;
  outline: none;
  background: ${(props) => (!props.disabled ? '#7297FF' : '#DCE0EC')};
  color: #ffffff;
  border-radius: 8px;
  line-height: 24px;
  padding: 16px 50px;
`;
