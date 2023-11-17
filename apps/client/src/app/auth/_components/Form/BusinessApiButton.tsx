import { signUpApi } from "@auth/_state/server/api";
import { Button } from "@chakra-ui/react";
import type { FormProps } from "@components/Form";
import { useController } from "react-hook-form";

export const BusinessApiButton = ({ control, name, getValues, setValue }: FormProps) => {
  const { field } = useController({ control, name });
  const { value } = field;

  const onBusinessApi = async () => {
    const businessNum = getValues && getValues("businessNum");

    try {
      const res = await signUpApi.businessConfirm(String(businessNum));
      const { data } = res.data;

      if (data[0].tax_type.includes("부가가치세") && setValue) {
        setValue("isBusinessNumState", true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button w="64px" type="button" onClick={() => onBusinessApi()}>
      {value ? "완료" : "조회"}
    </Button>
  );
};
