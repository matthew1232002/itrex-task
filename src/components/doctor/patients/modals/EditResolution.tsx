import { useRef } from 'react';
import Modal from '../../../UI/Modal';
import {
  StyledArea, StyledBtn, StyledControllers, StyledName, StyledText, StyledTitle, StyledWrapper,
} from './ResolutionModal.styled';

interface DropDownProps {
  onClose: () => void,
  text: string,
  firstName: string,
  lastName: string,
}

const EditResolution = ({
  onClose, text, firstName, lastName,
}: DropDownProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const onSaveHandler = () => {
  };
  return (
    <Modal onClose={onClose}>
      <StyledWrapper>
        <StyledTitle>Edit a Resolution</StyledTitle>
        <StyledName>
          {firstName}
          {' '}
          {lastName}
        </StyledName>
        <StyledText>Resolution</StyledText>
        <StyledArea id="text" defaultValue={text} ref={textRef} />
      </StyledWrapper>
      <StyledControllers>
        <StyledBtn onClick={onClose} cancel>Cancel</StyledBtn>
        <StyledBtn edit onClick={onSaveHandler}>Save</StyledBtn>
      </StyledControllers>
    </Modal>
  );
};

export default EditResolution;
