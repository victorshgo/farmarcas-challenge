import { useEffect } from "react";
import ReactDOM from "react-dom";

import { ModalProps } from "./types";

import { Modal as ModalComponent, ModalContent } from "./styles";

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: any) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalComponent onClick={handleClose}>
      <ModalContent>{children}</ModalContent>
    </ModalComponent>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
