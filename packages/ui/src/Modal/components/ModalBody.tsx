import type { ModalProps } from "..";
import { typeToIcon } from "../Modal.constants";
import * as Styled from "../Modal.styles";

export const ModalBody = ({ props }: Pick<ModalProps, "props">) => {
  const { title, type } = props;
  return (
    <Styled.Body>
      <span className="material-icons-outlined" style={{ fontSize: "48px", color: typeToIcon[type].color }}>
        {typeToIcon[type].icon}
      </span>
      <Styled.Text>{title}</Styled.Text>
    </Styled.Body>
  );
};
