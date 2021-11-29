import ReactDom from 'react-dom';
import { StyledBackdrop, StyledModalOverlay } from './Modal.styled';

const Backdrop = ({ onClose }) => <StyledBackdrop onClick={onClose} />;

const ModalOverlay = ({ children }) => (
  <StyledModalOverlay>
    {children}
  </StyledModalOverlay>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose, children }) => (
  <>
    {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
);

export default Modal;
