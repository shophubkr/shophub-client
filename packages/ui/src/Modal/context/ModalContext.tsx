"use client";

import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import { Modal } from "../Modal";
import type { EssentialModalProps, ModalContextProps, ModalProps } from "../Modal.types";

const initialModalProps: ModalProps = {
  isOpen: false,
  props: {
    type: "positive",
    title: "",
    onConfirm: () => {},
  },
  onClose: () => {},
};

export const ModalContext = createContext<ModalContextProps>({
  onOpenModal: () => {},
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalProps, setModalProps] = useState(initialModalProps);

  const onOpenModal = (props: EssentialModalProps) => {
    setModalProps((prev) => ({ ...prev, isOpen: true, props }));
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
