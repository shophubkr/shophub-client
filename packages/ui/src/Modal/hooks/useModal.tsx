import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const { onOpenModal } = useContext(ModalContext);

  if (onOpenModal === (() => {})) {
    throw new Error("onOpenModal is not working.");
  }

  return { open: onOpenModal };
};
