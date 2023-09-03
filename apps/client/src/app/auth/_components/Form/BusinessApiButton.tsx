import { signUpApi } from "@auth/_state/server/api";
import { Button } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import type { FormProps } from "./FormProps.type";

export const BusinessApiButton = ({ control, name, isBusinessNumber, onBusinessNumberUpdate }: FormProps) => {
  const { field } = useController({ control, name });
  const { value } = field;

  const onBusinessApi = async (value: string | undefined) => {
    try {
      const res = await signUpApi.businessConfirm(value as string);
      const { data } = res.data;

      if (data[0].tax_type.includes("부가가치세") && onBusinessNumberUpdate) {
        onBusinessNumberUpdate(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button w="64px" type="button" onClick={() => onBusinessApi(value)}>
      {isBusinessNumber ? "완료" : "조회"}
    </Button>
  );
};
