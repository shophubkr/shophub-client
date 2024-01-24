import type { ModalProps } from "..";
import { Button } from "../../Button";
import * as Styled from "../Modal.styles";

export const ModalFooter = ({ props, onClose }: Pick<ModalProps, "props" | "onClose">) => {
  const { type, onConfirm } = props;

  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  return (
    <Styled.FooterWrap>
      {type === "warning" ? (
        <Styled.ButtonWrap>
          <Button color="gray" size="small" onClick={onClose}>
            아니오
          </Button>
          <Button size="small" onClick={onConfirmAndClose}>
            예
          </Button>
        </Styled.ButtonWrap>
      ) : (
        <Button color="gray" size="small" w="80px" onClick={onConfirmAndClose}>
          확인
        </Button>
      )}
    </Styled.FooterWrap>
  );
};
