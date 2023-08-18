export interface ModalProps {
  type: "positive" | "negative" | "warning";
  isOpen: boolean;
  text: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export type EssentialModalProps = Pick<ModalProps, "type" | "text" | "onConfirm">;

export interface ModalContextProps {
  onOpenModal: (args: EssentialModalProps) => void;
}
