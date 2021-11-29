import Modal from '../../UI/Modal';
import {
  StyledArea, StyledBtn, StyledControllers, StyledName, StyledText, StyledTitle, StyledWrapper,
} from './CreateResolution.styled';

const CreateResolution = ({ onCloseCreate }) => (
  <Modal onClose={onCloseCreate}>
    <StyledWrapper>
      <StyledTitle>Create a Resolution</StyledTitle>
      <StyledName>Mila Western</StyledName>
      <StyledText>Resolution</StyledText>
      <StyledArea id="text" />
    </StyledWrapper>
    <StyledControllers>
      <StyledBtn onClick={onCloseCreate} cancel>Cancel</StyledBtn>
      <StyledBtn>Create</StyledBtn>
    </StyledControllers>
  </Modal>
);

export default CreateResolution;
