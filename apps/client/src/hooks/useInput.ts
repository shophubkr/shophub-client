import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

type UseInputReturnType = [string, Dispatch<SetStateAction<string>>, (e: React.ChangeEvent<HTMLInputElement>) => void];

export const useInput = (initialValue: string): UseInputReturnType => {
  const [value, setValue] = useState(initialValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return [value, setValue, handleChangeValue];
};
