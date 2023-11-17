"use client";

import { Dialog, DialogContainer, DialogContent, Portal } from "@ark-ui/react";

import * as Styled from "./Modal.styles";
import type { ModalProps } from "./Modal.types";
import { ModalBody, ModalFooter } from "./components";

export const Modal = ({ isOpen, props, onClose }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Portal>
        <DialogContainer>
          <Styled.Background>
            <DialogContent>
              <Styled.ModalWrapper>
                <ModalBody props={props} />
                <ModalFooter props={props} onClose={onClose} />
              </Styled.ModalWrapper>
            </DialogContent>
          </Styled.Background>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
};
