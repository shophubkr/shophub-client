import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import { Modal } from "..";
import type { EssentialModalProps, ModalContextProps, ModalProps } from "../Modal.types";

const initialModalProps: ModalProps = {
  type: "positive",
  text: "",
  isOpen: false,
  onClose: () => {},
  onConfirm: () => {},
};

export const ModalContext = createContext<ModalContextProps>({
  onOpenModal: () => {},
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalProps, setModalProps] = useState(initialModalProps);

  const onOpenModal = (args: EssentialModalProps) => {
    setModalProps((prev) => ({ ...prev, ...args, isOpen: true }));
  };

  const onClose = () => {
    setModalProps((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ onOpenModal }}>
      {children}
      <Modal {...modalProps} onClose={onClose} />
    </ModalContext.Provider>
  );
};
