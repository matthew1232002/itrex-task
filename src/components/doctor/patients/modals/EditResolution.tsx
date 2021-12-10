import Modal from '../../../UI/Modal';
import {
  StyledArea, StyledBtn, StyledControllers, StyledName, StyledText, StyledTitle, StyledWrapper,
} from './CreateResolution.styled';

type DropDownProps = {
  onClose: () => void
};

const EditResolution = ({ onClose }: DropDownProps) => (
  <Modal onClose={onClose}>
    <StyledWrapper>
      <StyledTitle>Edit an Resolution</StyledTitle>
      <StyledName>Mila Western</StyledName>
      <StyledText>Resolution</StyledText>
      <StyledArea id="text" />
    </StyledWrapper>
    <StyledControllers>
      <StyledBtn onClick={onClose} cancel>Cancel</StyledBtn>
      <StyledBtn>Create</StyledBtn>
    </StyledControllers>
  </Modal>
);

export default EditResolution;
