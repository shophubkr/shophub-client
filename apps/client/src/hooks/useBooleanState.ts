import { useState } from "react";

export const useBooleanState = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const onChange = () => setValue((prev) => !prev);

  return { value, setValue, onChange };
};
