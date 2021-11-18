import { StyledNumber, StyledTitle } from './Title.styled';

const Title = ({ text, number, last }) => (
  <StyledTitle last={last}>
    <StyledNumber>{number}</StyledNumber>
    <p>{text}</p>
  </StyledTitle>
);

export default Title;
