import { StyledItem, StyledList, StyledWrapper } from './DropDownList.styled';

type DropDownProps = {
  onCreateResolution: () => void,
  onEditResolution: () => void
};

const DropDownList = ({ onCreateResolution, onEditResolution }: DropDownProps) => (
  <StyledWrapper>
    <StyledList>
      <StyledItem onClick={onCreateResolution}>Create a resolution</StyledItem>
      <StyledItem onClick={onEditResolution}>Edit an appointment</StyledItem>
      <StyledItem>Delete</StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default DropDownList;
