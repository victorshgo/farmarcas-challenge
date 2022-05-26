export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
}
