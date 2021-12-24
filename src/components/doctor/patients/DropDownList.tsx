import { StyledItem, StyledList, StyledWrapper } from './DropDownList.styled';

type DropDownProps = {
  onCreateResolution: () => void,
  onEditResolution: () => void,
  onDelete: (id: string) => void,
  id: string,
};

const DropDownList = ({
  onCreateResolution, onEditResolution, onDelete, id,
}: DropDownProps) => (
  <StyledWrapper id="dropDown">
    <StyledList>
      <StyledItem onClick={onCreateResolution}>Create a resolution</StyledItem>
      <StyledItem onClick={onEditResolution}>Edit an appointment</StyledItem>
      <StyledItem onClick={() => onDelete(id)}>Delete</StyledItem>
    </StyledList>
  </StyledWrapper>
);
export default DropDownList;
