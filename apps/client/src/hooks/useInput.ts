import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return { value, handleChangeValue };
};
