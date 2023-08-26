import type { CustomFormProps } from "@auth/_types/types";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useController } from "react-hook-form";
import { signUpApi } from "../../_state/server/api";

export const BusinessApiButton = ({ control, name }: CustomFormProps) => {
  const { field } = useController({ control, name });
  const [사업자번호가있는가, set사업자번호여부] = useState(false);
  const { value } = field;

  const onBusinessApi = async (value: string | undefined) => {
    try {
      const res = await signUpApi.businessConfirm(value as string);
      const { data } = res.data;

      if (data[0].b_no !== "") {
        set사업자번호여부(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button w="64px" type="button" onClick={() => onBusinessApi(value)}>
      {사업자번호가있는가 ? "완료" : "조회"}
    </Button>
  );
};
