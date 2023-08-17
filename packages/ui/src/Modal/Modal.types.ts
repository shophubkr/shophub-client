export interface ModalProps {
  type: "positive" | "negative" | "warning";
  isOpen: boolean;
  text: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}
