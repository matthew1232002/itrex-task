import { useRef } from 'react';
import Modal from '../../../UI/Modal';
import {
  StyledArea, StyledBtn, StyledControllers, StyledName, StyledText, StyledTitle, StyledWrapper,
} from './ResolutionModal.styled';
import useActions from '../../../../hooks/useActions';

interface DropDownProps {
  onClose: () => void,
  text: string,
  firstName: string,
  lastName: string,
  id: string
}

const CreateResolution = ({
  onClose, text, firstName, lastName, id,
}: DropDownProps) => {
  const { createResolutionHandler } = useActions();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const onCreateHandler = () => {
    const resolutionData = {
      resolution: textRef.current!.value,
      appointmentID: id,
    };
    createResolutionHandler(resolutionData);
  };
  return (
    <Modal onClose={onClose}>
      <StyledWrapper>
        <StyledTitle>Create a Resolution</StyledTitle>
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
        <StyledBtn onClick={onCreateHandler}>Create</StyledBtn>
      </StyledControllers>
    </Modal>
  );
};

export default CreateResolution;
