import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const StyledButton = styled(NavLink)<{ padding: string, img?: string, invisible?: string, margin?: string }>`
  background: #FFFFFF;
  color: #7297FF;
  outline: none;
  border: none;
  border-radius: 8px;
  
  padding: ${(props) => (props.padding ? props.padding : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  background-image: ${(props) => (props.img ? `url(${props.img})` : 'none')};
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 16px;
  text-decoration: none;

  @media (max-width: 950px){
    display: ${(props) => (props.invisible ? props.invisible : '')};
  }
`;

type ButtonProps = {
  text: string,
  padding: string,
  to: string,
  itemPath: string,
  img?: string,
  invisible?: string,
  margin?: string,
};

const activeStyles = {
  backgroundColor: '#7297FF',
  color: '#fff',
  fontWeight: 600,
};

const Button = ({
  text, padding, to, itemPath, img, invisible, margin,
}: ButtonProps) => {
  const location = useLocation();
  return (
    <StyledButton
      padding={padding}
      img={img}
      to={to}
      margin={margin}
      invisible={invisible}
      activeStyle={activeStyles}
      isActive={() => itemPath === location.pathname}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
