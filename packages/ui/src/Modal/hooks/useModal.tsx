import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const { onOpenModal } = useContext(ModalContext);

  if (onOpenModal === (() => {})) {
    throw new Error("useModal should be used within ModalContext.Provider");
  }

  return { open: onOpenModal };
};
