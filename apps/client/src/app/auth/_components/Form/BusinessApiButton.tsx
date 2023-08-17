import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import Button from "~/components/Button/Button";
import type { FormEleProps } from "./FormElement";

export function BusinessApiButton({ field }: FormEleProps) {
  const [isBusiness, setIsBusiness] = useState(false);
  const { value } = field;

  const onBusinessApi = async (value: string) => {
    try {
      const res = await axios.post(
        `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=jLYDm8UrTI6O0xwYjloDybofTULlg9YFEVIbA8pyRkS78TmOmeB%2B%2FlVlBWBqqoOtBAiEn%2FyukJGWMuMJrMdt0w%3D%3D`,
        { b_no: [value] },
      );

      const { data } = res.data;
      if (data[0].b_no !== "") {
        setIsBusiness(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledButton type="button" size="small" onClick={() => onBusinessApi(value)}>
      {isBusiness ? "완료" : "조회"}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  margin: 0;
`;
