"use client";

import { Dialog, DialogContainer, DialogContent, Portal } from "@ark-ui/react";

import { typeToIcon } from "./Modal.constants";
import * as Styled from "./Modal.styles";
import type { ModalProps } from "./Modal.types";

export const Modal = ({ type = "positive", isOpen, text, onConfirm, onClose }: ModalProps) => {
  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Portal>
        <DialogContainer>
          <Styled.Background>
            <DialogContent>
              <Styled.ModalWrapper>
                <Styled.Body>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "48px", color: typeToIcon[type].color }}
                  >
                    {typeToIcon[type].icon}
                  </span>
                  <Styled.Text>{text}</Styled.Text>
                  {type === "warning" ? (
                    <Styled.ButtonWrap>
                      <Styled.Button onClick={onClose}>아니오</Styled.Button>
                      <Styled.Button onClick={onConfirmAndClose}>예</Styled.Button>
                    </Styled.ButtonWrap>
                  ) : (
                    <Styled.Button onClick={onConfirmAndClose}>확인</Styled.Button>
                  )}
                </Styled.Body>
              </Styled.ModalWrapper>
            </DialogContent>
          </Styled.Background>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
};
