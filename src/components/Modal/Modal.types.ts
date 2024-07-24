export interface ModalProps {
  title: string;
  open: boolean;
  width?: string | number;
  onClose: () => void;
  children: React.ReactNode;
}
