export const isEmptyWord = (word: string | null) => {
  if (!word) return true;
  return !word.trim();
};
