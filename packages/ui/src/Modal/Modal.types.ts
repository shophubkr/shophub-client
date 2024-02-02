export interface ModalProps {
  isOpen: boolean;
  props: {
    type: "positive" | "negative" | "warning";
    title: string;
    onConfirm?: VoidFunction;
  };
  onClose: VoidFunction;
}

export type EssentialModalProps = ModalProps["props"];

export interface ModalContextProps {
  onOpenModal: (args: EssentialModalProps) => void;
}
