import styled from "styled-components";
import { createPortal } from "react-dom";
const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose} />;
};
const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const backdropRoot = document.getElementById("backdrop");
const modalOverlayRoot = document.getElementById("modal-overlay");

export const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, backdropRoot)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalOverlayRoot)}
    </>
  );
};
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  padding: 1rem;
  z-index: 30;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background-color: white;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
