export const isEmptyWord = (word: string | null) => {
  if (!word) return false;
  return !word.trim();
};
