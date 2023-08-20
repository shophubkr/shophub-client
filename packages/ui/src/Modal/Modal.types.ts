export interface ModalProps {
  type: "positive" | "negative" | "warning";
  isOpen: boolean;
  title: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export type EssentialModalProps = Pick<ModalProps, "type" | "title" | "onConfirm">;

export interface ModalContextProps {
  onOpenModal: (args: EssentialModalProps) => void;
}
