import type { CustomFormProps } from "@auth/_types/types";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useController } from "react-hook-form";
import { Button } from "~/components/Button/Button";

export const BusinessApiButton = ({ control, name }: CustomFormProps) => {
  const { field } = useController({ control, name });
  const [사업자번호가있는가, set사업자번호여부] = useState(false);
  const { value } = field;

  const onBusinessApi = async (value: string | undefined) => {
    try {
      const res = await axios.post(
        `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=jLYDm8UrTI6O0xwYjloDybofTULlg9YFEVIbA8pyRkS78TmOmeB%2B%2FlVlBWBqqoOtBAiEn%2FyukJGWMuMJrMdt0w%3D%3D`,
        { b_no: [value] },
      );

      const { data } = res.data;
      if (data[0].b_no !== "") {
        set사업자번호여부(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledButton type="button" size="small" onClick={() => onBusinessApi(value)}>
      {사업자번호가있는가 ? "완료" : "조회"}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  margin: 0;
`;
