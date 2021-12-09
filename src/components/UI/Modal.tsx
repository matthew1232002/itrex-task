import ReactDom from 'react-dom';
import React from 'react';
import { StyledBackdrop, StyledModalOverlay } from './Modal.styled';
import { ChildrenProps } from '../models/children.model';

type BackDropProps = {
  onClose: () => void
};

type ModalProps = {
  onClose: () => void
  children: React.ReactNode
};

const Backdrop = ({ onClose }: BackDropProps) => <StyledBackdrop onClick={onClose} />;

const ModalOverlay = ({ children }: ChildrenProps) => (
  <StyledModalOverlay>
    {children}
  </StyledModalOverlay>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose, children }: ModalProps) => (
  <>
    {portalElement
      ? (
        <div>
          {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
          {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </div>
      ) : null}
  </>
);

export default Modal;
