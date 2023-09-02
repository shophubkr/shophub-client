import type { ModalProps } from "..";
import * as Styled from "../Modal.styles";

export const ModalFooter = ({ props, onClose }: Pick<ModalProps, "props" | "onClose">) => {
  const { type, onConfirm } = props;

  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  return (
    <section>
      {type === "warning" ? (
        <Styled.ButtonWrap>
          <Styled.Button onClick={onClose}>아니오</Styled.Button>
          <Styled.Button onClick={onConfirmAndClose}>예</Styled.Button>
        </Styled.ButtonWrap>
      ) : (
        <Styled.Button onClick={onConfirmAndClose}>확인</Styled.Button>
      )}
    </section>
  );
};
