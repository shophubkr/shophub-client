export const useEnterEvent = (func: () => void) => {
  const isEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter";

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => isEnterKey(e) && func();

  return { handlePressEnter };
};
