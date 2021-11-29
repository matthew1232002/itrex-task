import { StyledItem, StyledList, StyledWrapper } from './DropDownList.styled';

const DropDownList = ({ onCreateResolution }) => (
  <StyledWrapper>
    <StyledList>
      <StyledItem onClick={onCreateResolution}>Create a resolution</StyledItem>
      <StyledItem>Edit an appointment</StyledItem>
      <StyledItem>Delete</StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default DropDownList;
