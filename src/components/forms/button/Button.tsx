import styled from 'styled-components';
import Arrow from '../../../assets/arrow-right.svg';

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: #7297FF;
  color: #FFF;
  font-size: 17px;
  font-weight: 600;
  padding: 16px 56px 16px 24px;
  border: none;
  position: relative;
  cursor: pointer;

  &:after{
    width: 21px;
    height: 21px;
    content: "";
    background-image: url(${Arrow});
    position: absolute;
    right: 26px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 14px 48px 14px 16px;
    :after{
      right: 19px;
    }
  }
`;

type ButtonProps = {
  text: string,
};

const Button = ({ text }: ButtonProps) => (
  <StyledButton type="submit">{text}</StyledButton>
);

export default Button;
