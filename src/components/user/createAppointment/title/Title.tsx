import { StyledNumber, StyledTitle } from './Title.styled';

type TitleProps = {
  text: string,
  number: string,
  last: boolean
};

const Title = ({ text, number, last }: TitleProps) => (
  <StyledTitle last={last}>
    <StyledNumber>{number}</StyledNumber>
    <p>{text}</p>
  </StyledTitle>
);

export default Title;
