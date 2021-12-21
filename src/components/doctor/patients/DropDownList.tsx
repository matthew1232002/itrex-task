import { StyledItem, StyledList, StyledWrapper } from './DropDownList.styled';

type DropDownProps = {
  onCreateResolution: () => void
};

const DropDownList = ({ onCreateResolution }: DropDownProps) => (
  <StyledWrapper>
    <StyledList>
      <StyledItem onClick={onCreateResolution}>Create a resolution</StyledItem>
      <StyledItem>Edit an appointment</StyledItem>
      <StyledItem>Delete</StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default DropDownList;
