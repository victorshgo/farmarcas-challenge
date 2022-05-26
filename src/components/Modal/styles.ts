import styled from "styled-components";

export const Modal = styled.div`
  inset: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 30%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-white);
`;
